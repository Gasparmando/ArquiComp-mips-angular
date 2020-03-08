import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugUnitComponent } from './debug-unit/debug-unit.component';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LatchesNavComponent } from './debug-unit/latches-nav/latches-nav.component';
import { LatchComponent } from './debug-unit/latches-nav/latch/latch.component';
import { SerialPortService } from '../cores/services/serialPort/serial-port.service';



@NgModule({
  declarations: [DebugUnitComponent, HomeComponent, LatchesNavComponent, LatchComponent] ,
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    DebugUnitComponent,
    HomeComponent,
    LatchesNavComponent
  ]
})
export class PagesModule { }
