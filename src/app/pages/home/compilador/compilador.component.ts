import { Component, OnInit } from '@angular/core';
import { CompilerService } from 'src/app/cores/services/compiler.service';

@Component({
  selector: 'app-compilador',
  templateUrl: './compilador.component.html',
  styleUrls: ['./compilador.component.scss']
})
export class CompiladorComponent implements OnInit {

  exito: boolean = false;
  run: boolean = false;

  text: string = ''

  constructor(private compilerService: CompilerService) { }

  ngOnInit(): void {}

  compilar(s: string) {

    (this.text = this.compilerService.compilar(s)) == '-1' ? this.exito = false : this.exito = true;

  }

  onClick(s?: string) {
    this.compilar(s)
    this.run = true;
  }

  onClickCargar(s: string) {}

}
