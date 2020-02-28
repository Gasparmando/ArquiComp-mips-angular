import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-compilador',
  templateUrl: './compilador.component.html',
  styleUrls: ['./compilador.component.scss']
})
export class CompiladorComponent implements OnInit {



  @Input() PC: number = 0;

  @Input() iteration: number = 0;

  constructor() { }

  ngOnInit(): void {

  }


}
