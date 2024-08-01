import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //Necessário para ngModel
import { FilterPipe } from './jogadores/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JogadoresComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
