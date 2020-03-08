import { Component, OnInit } from '@angular/core';
import { MipsData } from 'src/app/cores/models/mips-data';
import { isObject } from 'util';
import { SerialPortService } from 'src/app/cores/services/serialPort/serial-port.service';

@Component({
  selector: 'app-debug-unit',
  templateUrl: './debug-unit.component.html',
  styleUrls: ['./debug-unit.component.scss']
})
export class DebugUnitComponent implements OnInit {

  data: MipsData;


  listita = function listita(obj:any) {
    for (const key in obj) {
      if (isObject(obj[key])) {
         listita(obj[key])        
      }else{
        console.log(`El objeto ${key} es ${obj[key]}`)
      }
    }
  }

  constructor(private _serialport: SerialPortService) { }

  ngOnInit(): void {

    this.data = this._serialport.getMipsData();
    this._serialport.pruebas();

  }



}
