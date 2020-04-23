//当用户访问 /student/1234567890查询学生的信息
//当用户访问 /teacher/252525查询老师的信息
let http=require('http');
let url=require('url')
let server=http.createServer((req,res)=>{
     if(req.url==='/favicon.ico'){
         return;
     }
     var useurl=req.url;
     res.writeHead(200,{"Content-Type":"text/html;charest=utf-8"})
     if(useurl.subster(0,9)==="/student"){
        var studentid=useurl.subster(9)
         if(/^\d{10}$/.test(studentid)){
            res.end("你查询的学生信息，id是："+studentid);
         }else{
             res.end("你查询的学生信息错误，id是："+studentid)
         }
     }
     res.end();
})
console.log('B')
server.listen(5000,'localhost')

