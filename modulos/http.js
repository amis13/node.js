const http = require('http');

const router = ((req, res) => {
    console.log('nueva peticion');
    console.log(req.url);
    
    // escribir respuesto al usuario
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    
    
    res.write('Hola, soy amis13');
    
    res.end();
});

http.createServer(router).listen(3000);
console.log('Escuchando http en el puerto 3000');
