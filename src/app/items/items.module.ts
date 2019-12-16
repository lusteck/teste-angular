import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';
import { ListagemItemComponent } from './listagem-item/listagem-item.component';

@NgModule({
  declarations: [
    DetalheItemComponent,
    ListagemItemComponent
  ],
  exports: [
    ListagemItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ItemsModule { }
