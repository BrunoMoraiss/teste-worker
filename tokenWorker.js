setInterval(() => {
    process.send('incrementar'); // Envie uma mensagem para o processo principal
}, 2000);