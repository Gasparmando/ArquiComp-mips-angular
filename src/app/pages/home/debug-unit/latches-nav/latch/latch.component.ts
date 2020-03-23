import { Component, OnInit, Input } from '@angular/core';
import { IFIDLatch } from 'src/app/cores/models/latches/ifidlatch';
import { IDEXLatch } from 'src/app/cores/models/latches/idexlatch';
import { EXMEMLatch } from 'src/app/cores/models/latches/exmemlatch';
import { MEMWBLatch } from 'src/app/cores/models/latches/memwblatch';
import { isObject } from 'util';

@Component({
  selector: 'app-latch',
  templateUrl: './latch.component.html',
  styleUrls: ['./latch.component.scss']
})
export class LatchComponent implements OnInit {

  constructor() { }

  @Input() obj : IFIDLatch | IDEXLatch | EXMEMLatch | MEMWBLatch

  ngOnInit(): void {
    
    }


  listita = function listita(obj:any) {
    let s="";
    for (const key in obj) {
      if (isObject(obj[key])) {
         listita(obj[key])        
      }else{
        console.log(`El objeto ${key} es ${obj[key]}`)
        
      }
    }
  }

}
