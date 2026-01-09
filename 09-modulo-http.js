// Se importa el módulo HTTP
// npm i http-server

const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url)


    // Comunicasion entre la diferentes maquinas por el protocolo http
    if (request.url === '/') {
        response.write(`
        <h1>Welcome to the Server</h1>
        <p>Esta es la PAgina Principal</p>
        <nav>
            <a href="/">Inicio</a>
            <a href="/about">Segunda Pagina </a>
            <a href="/sds">Tercera pagina de herror</a>
        </nav>
        `
        );
        return response.end();
    }

    if (request.url === '/about') {
        response.write(`
        <h1>Welcome to the Server</h1>
        <p>Esta es la segunda pagina</p>
        <nav>
            <a href="/">Inicio</a>
            <a href="/about">Segunda Pagina </a>
            <a href="/sds">Tercera pagina de herror</a>
        </nav>
        `);
        return response.end();

    } else if (request.url === '/hola') {
        response.write(`
        <h1>Welcome to the Server</h1>
        <p>Esta es la tercera pagina</p>
        <nav>
            <a href="/">Inicio</a>
            <a href="/about">Segunda Pagina </a>
            <a href="/sds">Tercera pagina de herror</a>
        </nav>
        `);
        return response.end();
    }

    // Uso de varias lineas de codigo HTML
    response.write(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <nav>
            <a href="/">Inicio</a>
            <a href="/about">Segunda Pagina </a>
            <a href="/sds">Tercera pagina de herror</a>
        </nav>
        <p>Este es un comentario en la pagina Web</p>
        `);
    response.end();
})

server.listen(3000);

//http port
console.log('Servidor escuchando en el puerto 3000');


