
let http=require('http');
let fs=require('fs')
dirs=[];
http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        return;
    }
     fs.readdir('../img',function(err,files){
         console.log(files)
         for (var i=0;i<files.length;i++){
            fs.stat('../img'+files[i],function(err,stats){
                if(fs.isDirectory){
                 dirs.push(files[i]);
                }
            })
         }
     })
   
     
     res.end("ok");
}).listen(3000,'192.168.0.119')

