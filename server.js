const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;


/*
    Coded Full Loved By Arikun | Rii Haxor @ IndoSec - 2021
    Using NodeJS + Socket.io = <3 
    Copyright (C) Arikun - IndoSec @2021

    Don't Recode, This App Is A Simple App Sir.

    Wan't To Recode ? Don't Forget Follow And Fork This Repo :)

    Or Give Me A Coffee XD : https://trakteer.id/arkun666
    Follow My Instagram    : https://instagram.com/arkun666 
    IndoSec Fanspage FB    : https://www.facebook.com/IndoSecOfficial/
    
*/

http.listen(port,() => {console.log(`SERVER RUN IN ${port}`)});


io.on('connection', (socket) => {
    console.log('Some User Connected');
    socket.on('message', (evt) => {
        socket.broadcast.emit('message', evt);
    })
});

io.on('disconnect', (evt) => {
    console.log('Disconnected');

})
