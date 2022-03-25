console.log("here now")
const http = require("http");

product = require("./product.js")

const parseParams=(searchParams)=>{
    const params = new URLSearchParams(searchParams);
    return Array.from(params.entries()).reduce(
       (acc,[key,value])=>({
            ...acc,
            [key]:value,

        }),
        {}
        
    );
};





const server = http.createServer(async(req,res)=>{
  if(req.url === '/api/products') {
      const {code,data}= await product.getAll();
      res.writeHead(code);
      res.end(JSON.stringify(data));
  }else if(req.url.match(/\/api\/products\/\w+/)){
      const urlElements=req.url.split('/');
      const id = urlElements(urlElements.length - 1);

      const {code,data}= await product.getById();
      res.writeHead(code);
      res.end(JSON.stringify(data));
  } else{
      res.writeHead(404);
      res.end(JSON.stringify({message: 'route not found'}));
  }
});
const PORT= 8080;
server.listen(PORT,()=>console.log('server is started '));