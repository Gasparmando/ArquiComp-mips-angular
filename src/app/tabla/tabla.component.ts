import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit, OnChanges {

  @Input() title: string;

  @Input() data: number[];

  @Input() reg: string = 'x';

  column1: number[] = [];
  column2: number[] = [];
  column3: number[] = [];
  column4: number[] = [];

  constructor() {

   }

  ngOnInit(): void {


    for(let i=0;i<8;i++){
      this.column1[i]=this.data[i];
      this.column2[i]=this.data[8+i];
      this.column3[i]=this.data[16+i];
      this.column4[i]=this.data[24+i];
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

  }
}
