import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugUnitComponent } from './debug-unit/debug-unit.component';
import { AppModule } from '../app.module';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [DebugUnitComponent, HomeComponent],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    DebugUnitComponent,
    HomeComponent
  ]
})
export class PagesModule { }
