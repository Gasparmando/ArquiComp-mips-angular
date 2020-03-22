import { Component, OnInit } from '@angular/core';
import { CompilerService } from 'src/app/cores/services/compiler.service';
import { SerialPortService } from 'src/app/cores/services/serial-port.service';

@Component({
  selector: 'app-compilador',
  templateUrl: './compilador.component.html',
  styleUrls: ['./compilador.component.scss']
})
export class CompiladorComponent implements OnInit {

  exito: boolean = false;
  run: boolean = false;

  datomips: any = ''

  text: string = ''

  constructor(private compilerService: CompilerService, private serv: SerialPortService) { }

  ngOnInit(): void {
    this.serv.listen('mips-data').subscribe((data) => {
      
      this.datomips = data;
    })
  }

  compilar(s: string) {

    (this.text = this.compilerService.compilar(s)) == '-1' ? this.exito = false : this.exito = true;

  }

  onClick(s?: string) {
    this.compilar(s)
    this.run = true;
  }

  onClickCargar(s: string) {
    this.serv.emit('evento-mensaje','Hola Gente');
  }

}
