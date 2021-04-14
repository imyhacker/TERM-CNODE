var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl');
const chalck = require('chalk');
var username = '';

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


socket.on('disconnect', function () {
    socket.emit('Disconnect');
})

socket.on('connect', () => {
    console.clear();
    console.log('============ { I N D O S E C } ============');
    console.log('Coded By Riihaxor | Arikun @ Indosec - 2021');
    console.log(chalck.white.bgRedBright.italic('     WRITE YOUR MESSAGE FOR THIS DAY :D    '));
    console.log('=============== START CHAT ================');
    username = process.argv[2];
})

socket.on('message', (data) => {
    const { cmd, username } = data
    console.log(chalck.red(" [+] ") + chalck.green(username + ' : ' + cmd.split('\n')[0]));
})

repl.start({
    prompt: '',
    eval: (cmd) => {
        socket.send({cmd, username})
    }
})