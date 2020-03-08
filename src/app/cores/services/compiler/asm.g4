grammar assembler;

programa : instruccion+;

instruccion : tipoR | tipoI | tipoJ | nop;



tipoR:;

tipoI: tipoIarith | tipoIls;

tipoIarith:;
tipoIls:;

tipoJ :;

nop : 'NOP';

args : '';