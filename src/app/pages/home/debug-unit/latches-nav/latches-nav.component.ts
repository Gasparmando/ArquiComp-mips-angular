import { Component, OnInit, Input } from '@angular/core';
import { IFIDLatch } from 'src/app/cores/models/latches/IFIDLatch';
import { IDEXLatch } from 'src/app/cores/models/latches/IDEXLatch';
import { EXMEMLatch } from 'src/app/cores/models/latches/EXMEMLatch';
import { MEMWBLatch } from 'src/app/cores/models/latches/MEMWBLatch';

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
