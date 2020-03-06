import { Component, OnInit } from '@angular/core';
import { CompilerService } from 'src/app/cores/services/compiler.service';

@Component({
  selector: 'app-compilador',
  templateUrl: './compilador.component.html',
  styleUrls: ['./compilador.component.scss']
})
export class CompiladorComponent implements OnInit {

  constructor(private compilerService: CompilerService) { }

  ngOnInit(): void {
    console.log(this.compilerService.getInstrType('XORI'));
    console.log(this.compilerService.getInstrType('J'));
    console.log(this.compilerService.getInstrType('ADD'));
  }

}
