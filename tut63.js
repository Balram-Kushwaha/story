// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is rohandas');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>psedo selectors &more designing</title>
      <style>
      .container{
          border: 2px solid green;
          background-color: rgb(150, 175, 50);
          padding:34px;
          margin:34px auto;
          width:666px;
  
      }
  
      a{
          text-decoration: none;
      }
  
      a:hover{
          color:rgb(212, 11, 11);
          background-color:yellowgreen ;
      }
      a:visited{
          background-color:aqua;
      }
      a:active{
          background-color:pink;
      }
  
      .btn{
          background-color:aquamarine;
          padding:6px;
          border:none;
          cursor:pointer;
          font-size:18px;
          border-radius: 4px;
      }
      .btn:hover{
          color:darkgoldenrod;
          background-color: beige;
          border:2px solid black;
      }
      </style>
  </head>
  <body>
      <div class="container" id="cont">
          <h3>this is my heading</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Iusto esse, atque, ipsa inventore illo recusandae rem quae
                magni quas maiores harum totam commodi ratione. Provident id maiores temporibus 
                omnis officiis sunt odio qua voluptatum.
  
          </p>
          <a href="https//google.com" class="btn">read more</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});