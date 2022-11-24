import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { cincuentaUnoComponent } from './cincuentauno/cincuentaUno.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, cincuentaUnoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
