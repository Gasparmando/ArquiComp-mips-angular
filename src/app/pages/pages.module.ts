import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugUnitComponent } from './debug-unit/debug-unit.component';
import { AppModule } from '../app.module';
import { FeaturesModule } from '../features/features.module';



@NgModule({
  declarations: [DebugUnitComponent],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    DebugUnitComponent
  ]
})
export class PagesModule { }
