import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { SerialPortService } from './cores/services/serialPort/serial-port.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule
  ],
  providers: [SerialPortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
