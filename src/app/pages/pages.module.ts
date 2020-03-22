import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DebugUnitComponent } from './home/debug-unit/debug-unit.component';
import { LatchesNavComponent } from './home/debug-unit/latches-nav/latches-nav.component';
import { LatchComponent } from './home/debug-unit/latches-nav/latch/latch.component';
import { CompiladorComponent } from './home/compilador/compilador.component';
import { SerialPortService } from '../cores/services/serial-port.service';




@NgModule({
  declarations: [DebugUnitComponent, HomeComponent, LatchesNavComponent, LatchComponent, CompiladorComponent] ,
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  providers: [SerialPortService],
  exports: [
    DebugUnitComponent,
    HomeComponent,
    LatchesNavComponent
  ]
})
export class PagesModule { }
