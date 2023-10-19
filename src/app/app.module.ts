import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { OrdinaPerPipe } from './ordina-per.pipe';
import { ModificaComponent } from './modifica/modifica.component';





@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrdinaPerPipe,
    ModificaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
