import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaTesteComponent } from './tabela-teste/tabela-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    TabelaTesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
