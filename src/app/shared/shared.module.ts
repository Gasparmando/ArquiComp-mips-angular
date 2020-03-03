import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [NavbarComponent, TableComponent, LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
