import sharp from "sharp";
import { writeFile } from "node:fs/promises";
const sizes={};
for(const name of ["windows","entry-doors","patio-doors","showroom","manufacturing","profile","window-detail","comfort-backyard"]){
  const source=`public/media/${name}.webp`;
  const meta=await sharp(source).metadata();
  sizes[name]={width:meta.width,height:meta.height,widths:[]};
  for(const width of [480,800,1200]){
    const actual=Math.min(width,meta.width);
    await sharp(source).resize({width:actual}).webp({quality:78}).toFile(`public/media/${name}-${width}.webp`);
    sizes[name].widths.push(actual);
  }
}
await writeFile("src/content/image-sizes.json",JSON.stringify(sizes,null,2)+"\n");
console.log("Responsive WebP variants ready");
