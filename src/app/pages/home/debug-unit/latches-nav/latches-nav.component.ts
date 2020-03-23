import { Component, Input, OnInit } from '@angular/core';
import { EXMEMLatch } from 'src/app/cores/models/latches/exmemlatch';
import { IDEXLatch } from 'src/app/cores/models/latches/idexlatch';
import { IFIDLatch } from 'src/app/cores/models/latches/ifidlatch';
import { MEMWBLatch } from 'src/app/cores/models/latches/memwblatch';

@Component({
  selector: 'app-latches-nav',
  templateUrl: './latches-nav.component.html',
  styleUrls: ['./latches-nav.component.scss']
})
export class LatchesNavComponent implements OnInit {

  @Input() latches: {
    ifid: IFIDLatch,
    idex: IDEXLatch,
    exemem: EXMEMLatch,
    memwb: MEMWBLatch
  };

  constructor() { }

  ngOnInit(): void {

  }

}
