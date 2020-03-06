import { Injectable, OnInit } from '@angular/core';
import { Opcodes, TypeI, TypeJ, TypeR } from './opcodes.enum';

@Injectable({
  providedIn: 'root'
})
export class CompilerService implements OnInit {
  
  
  ngOnInit(): void {
  }

  constructor() { }

  getOpcode(instr:string)  {
    console.log(Opcodes[instr])
    return  (Opcodes[instr])
  }

  getInstrType(code:string){
    return (TypeI.includes(code)) ? 'I' : 
    (TypeJ.includes(code))? 'J' : 
    (TypeR.includes(code))? 'R' : 'X'
  }
  
    


}
