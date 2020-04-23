//当用户访问 /student/1234567890查询学生的信息
//当用户访问 /teacher/252525查询老师的信息
let http=require('http');
let fs=require('fs')
http.createServer((req,res)=>{
     var userid=parseInt(Math.random()*89999+10000);
     console.log("欢迎ID为"+userid+"的用户")
     res.writeHead(200,{
         "Content-Type":"text/html;charest=utf-8"
        })
    fs.writeFile('./home.html',function(err,data){
        if(err){
            throw err;
        }
        console.log(userid+"读取完毕")
        res.end(data);
    })
   
     
     res.end();
}).listen(5000,'192.168.0.119')

