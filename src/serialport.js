const PUERTO_SERIAL = 'COM1'
const PUERTO_HTTP = 3000;

let app = require('express')();
let server = require('http').Server(app);
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const parser = new Readline()
const mipsUart = new SerialPort( PUERTO_SERIAL, { baudRate: 9600 })
mipsUart.pipe(parser)

let socketAngular = require('socket.io')(server);



socketAngular.on('connection', (socket) => {
    console.log('user connected');

    socket.on('evento-mensaje', (message) => {
        console.log('Recibi de Angular: ' + message);
        escribirMips(message)
    });
});

server.listen(PUERTO_HTTP, () => {
    console.log(`started on port: ${PUERTO_HTTP}`);
});

mipsUart.on('data', line => {

    console.log(`> ${line}`)
    var datos = armarTablaMips(line);
    let value = parseInt(line)
    enviarAngular('mips-data', value)
    // enviarAngular('mips-data', datos)

}
)
parser.on('data', line => {

    console.log(`> ${line}`)
    let value = parseInt(line)
    enviarAngular('mips-data', value)

})

let escribirMips = function (str) {
    console.log('Se envia al Mips: ' + str);
    mipsUart.write(str);
}

let enviarAngular = function (event, msg){
    console.log('Enviando a Angular: ' + msg)
    socketAngular.emit(event, msg)
}

escribirMips('ROBOT POWER ON\n');

let data = [1,0,3,4,5,6,7]
// armarTablaMips(data);

function armarTablaMips(data){
    var n = data.length
    console.log(n)
    if(n%4==0){
        var registros = []

        for(var i = 0; i<n; i++){
            registros.push( armar32bits())
        }
    }
    var d = []
    

}

function armar32bits(a,b,c,d){
    return (2**24)*parseInt(a) + (2**16)*parseInt(b) + (2**8)*parseInt(c) + parseInt(d)
}

console.log(armar32bits(0,0x00,0x00,0));


