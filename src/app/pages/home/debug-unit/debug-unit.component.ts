import { Component, OnInit } from '@angular/core';
import { MipsData } from 'src/app/cores/models/mips-data';
import { isObject } from 'util';
import { DataProviderService } from 'src/app/cores/services/data-provider.service';

@Component({
  selector: 'app-debug-unit',
  templateUrl: './debug-unit.component.html',
  styleUrls: ['./debug-unit.component.scss']
})
export class DebugUnitComponent implements OnInit {

  data: MipsData;


  constructor(private dataService: DataProviderService) { }

  ngOnInit(): void {

    this.data = this.dataService.Mock();

  }

  onClickDebug(){
    this.data = this.dataService.readFromPort();
  }

}
