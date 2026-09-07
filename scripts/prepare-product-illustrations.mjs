import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import sharp from 'sharp';
const manifest=JSON.parse(await readFile('output/imagegen/product-illustrations-manifest.json','utf8'));
const sizes=JSON.parse(await readFile('src/content/image-sizes.json','utf8'));
await mkdir('public/media/illustrations',{recursive:true});
await mkdir('output/imagegen/product-originals',{recursive:true});
for(const {name,path} of manifest){
 await copyFile(path,`output/imagegen/product-originals/${name}.png`);
 const info=await sharp(path).metadata();
 await sharp(path).resize({width:1200,withoutEnlargement:true}).webp({quality:85}).toFile(`public/media/illustrations/${name}.webp`);
 for(const width of [480,800,1200])await sharp(path).resize({width}).webp({quality:85}).toFile(`public/media/illustrations/${name}-${width}.webp`);
 sizes[`illustrations/${name}`]={width:info.width,height:info.height,widths:[480,800,1200]};
}
await writeFile('src/content/image-sizes.json',JSON.stringify(sizes,null,2)+'\n');
console.log(`Prepared ${manifest.length} reviewed illustration assets with responsive sizes.`);
