const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url)

    if (request.url === '/') {
        response.write("Welcome to the Server ");
        return response.end();
    }

    if (request.url === '/about') {
        response.write("Acerca de ");
        return response.end();

    } else if (request.url === '/hola') {
        response.write("Contacto ");
        return response.end();
    }

    // Uso de varias lineas de codigo HTML
    response.write(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <a href="/">Go to Home</a>
        <p>Este es un comentario en la pagina Web</p>
        `);
    response.end();
})

server.listen(3000);

//http port
console.log('Servidor escuchando en el puerto 3000');


