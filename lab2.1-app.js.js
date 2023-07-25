const http = require('http');
const fs = require('fs');
const server = http.createServer(rqListener);
function rqListener (req,res){
    const url = req.url;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>');
        res.write("<body><form action='/create-user' method='POST'><input type='text' name='message'/><button type='submit'>Create User</button></form></body>")
        res.write('</html>');
        res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        res.end();
	}
	if (url === '/create-user') {
        const body =[];
        console.log("res.on")
        res.on('data',(chunk)=> {
            console.log("res.ondata")
            body.push(chunk)});
        res.on('end', ()=>{
            console.log("res.onend")
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);;
        })
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        res.end();
	}
};

server.listen(3000);