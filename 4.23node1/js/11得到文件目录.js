
let http=require('http');
let fs=require('fs')
http.createServer((req,res)=>{
    if(res.url==='/favicon.ico'){
        return;
    }
     fs.stat('../img',function(err,data){
         console.log()
     })
   
     
     res.end(success);
}).listen(3000,'192.168.0.119')

