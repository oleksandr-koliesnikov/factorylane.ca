import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

const root = resolve("out");
const types = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8", ".json":"application/json", ".txt":"text/plain; charset=utf-8", ".xml":"application/xml", ".svg":"image/svg+xml", ".webp":"image/webp", ".png":"image/png", ".ico":"image/x-icon", ".mp4":"video/mp4", ".woff2":"font/woff2" };
createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,"http://localhost").pathname);
    let file = resolve(root,"."+pathname);
    if(file!==root&&!file.startsWith(root+sep)) {res.writeHead(403).end();return;}
    let info = await stat(file);
    if(info.isDirectory()) {
      if(!pathname.endsWith("/")) {res.writeHead(308,{Location:pathname+"/"}).end();return;}
      file=resolve(file,"index.html");info=await stat(file);
    }
    const type=types[extname(file)]??"application/octet-stream";
    res.setHeader("Content-Type",type);
    res.setHeader("Cache-Control",pathname.startsWith("/_next/static/")?"public, max-age=31536000, immutable":type.startsWith("text/html")?"no-cache":"public, max-age=86400");
    res.setHeader("X-Content-Type-Options","nosniff");
    res.setHeader("Accept-Ranges","bytes");
    const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range??"");
    if(match) {
      const start=match[1]?Number(match[1]):Math.max(0,info.size-Number(match[2]));
      const end=match[1]&&match[2]?Math.min(Number(match[2]),info.size-1):info.size-1;
      if(start>end||start>=info.size) {res.writeHead(416,{"Content-Range":`bytes */${info.size}`}).end();return;}
      res.writeHead(206,{"Content-Range":`bytes ${start}-${end}/${info.size}`,"Content-Length":end-start+1});
      if(req.method==="HEAD")res.end();else pipeline(createReadStream(file,{start,end}),res,()=>{});
    } else if(/text\/|javascript|json|xml|svg/.test(type)&&req.headers["accept-encoding"]?.includes("gzip")) {
      res.setHeader("Content-Encoding","gzip");res.setHeader("Vary","Accept-Encoding");
      if(req.method==="HEAD")res.end();else pipeline(createReadStream(file),createGzip(),res,()=>{});
    } else {
      res.setHeader("Content-Length",info.size);
      if(req.method==="HEAD")res.end();else pipeline(createReadStream(file),res,()=>{});
    }
  } catch { res.writeHead(404,{"Content-Type":"text/plain"}).end("Not found"); }
}).listen(Number(process.env.PORT??3001),"127.0.0.1",()=>console.log(`Factory Lane preview: http://127.0.0.1:${process.env.PORT??3001}`));
