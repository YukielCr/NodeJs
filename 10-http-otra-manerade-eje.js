





const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Bienvenido al servidor");
        return res.end();
    }

    if(req.url==='/about'){
        // Blocking code
        // for(let i=0;i<100000;i++){
        //     console.log(Math.random()*i);
        // }


        res.write("about");
        return res.end();
    }
    else{
        res.write(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <a href="/">Go to Home</a>
        <p>Este es un comentario en la pagina Web</p>
        `);
        res.end();
    }
})

server.listen(3000)
console.log('Servidor escuchando en el puerto 3000');