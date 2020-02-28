import { Component, OnInit } from '@angular/core';
import { MipsData } from './models/mips-data'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'mips-controller';

  data: MipsData;

  ngOnInit(): void {

    this.data = {
      pc: 24,
      iteration: 6,
      Regs: [0,1,2,3,4,5,6,7,8,9,10,1,12,13,14,15,16,17,18,20,19,21,22,23,24,25,26,27,28,29,30,31],
      DataMemory: [0, 1, 2, 3, 3, 2, 1, 2],
      IFID: {
        pc: 20,
        instruction: 0b00101000001000100101001010101010
      },
      IDEX: {
        control: {
          memToReg: false,
          regWrite: false,
          memWrite: false,
          memRead: false,
          branchEq: false,
          aluSrc: false,
          regDst: false,
          funct: [false, false, false, false, false, false],
          trunk: [false, false],
          signed: false,
          shift: false,
          branchNE: false,
          jump: false,
          linkR: false
        },
        pc: 20,
        readData1: 25,
        readData2: 40,
        signExt: 12223,
        rs: 31,
        rt: 5,
        rd: 22,
        shift: 121214
      },
      EXMEM: {
        control: {
          memToReg: false,
          regWrite: false,
          memWrite: false,
          memRead: false,
          branchEq: false,
          aluSrc: false,
          regDst: false,
          funct: [false, false, false, false, false, false],
          trunk: [false, false],
          signed: false,
          shift: false,
          branchNE: false,
          jump: false,
          linkR: false
        },
        pc: 16,
        aluResult: 40,
        wrData: 65,
        regDst: 15,
        shift: 1234

      },
      MEMWB: {
        control: {
          memToReg: false,
          regWrite: false,
          memWrite: false,
          memRead: false,
          branchEq: false,
          aluSrc: false,
          regDst: false,
          funct: [false, false, false, false, false, false],
          trunk: [false, false],
          signed: false,
          shift: false,
          branchNE: false,
          jump: false,
          linkR: false
        },
        pc: 12,
        readData: 80,
        addr: 32,
        regDst: 11,
        shift: 88776


      },
      forwarding: {
        forwardA: 0,
        forwardB: 2

      },
      hazard: {
        pcWrite: true,
        ifWrite: true,
        controlMux: 0

      }


    }
  }

}
