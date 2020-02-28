import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CompiladorComponent } from './compilador/compilador.component';
import { TablaComponent } from './tabla/tabla.component';
import { LatchesNavComponent } from './latches-nav/latches-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CompiladorComponent,
    TablaComponent,
    LatchesNavComponent
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
