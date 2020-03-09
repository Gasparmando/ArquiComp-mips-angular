const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM1');
const parser = new Readline();

port.pipe(parser);

port.read();

// parser.on('data', console.log);

// port.on('readable', function () {
//      console.log('Data:', port.read())
//   })

port.on('data', function (data) {
    console.log('Data:', data)
    let d = 2**8;
    let n = data.length;
    let dato = armar32bits(data[0],data[1],data[2],data[3]);

    console.log("Dato convertido:" + dato)
  })

const palabra = 'EL MENSAJE HA SIDO ENVIADO CON EXITO\n';



    escribirPuerto('Hola\n');


    function escribirPuerto( word ) {

        port.write( word, function(err) {
            if (err) {
              return console.log('Error on write: ', err.message)
            }
            console.log('message written: '+ word)
          })
    
    };

    function armar32bits(a,b,c,d) {
        return (2**24)*parseInt(a) + (2**16)*parseInt(b) + (2**8)*parseInt(c) + parseInt(d) ;
    }