import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListagemListComponent } from './listagem-list/listagem-list.component';
import { DetalheListComponent } from './detalhe-list/detalhe-list.component';
import { ItemsModule } from '../items/items.module';

@NgModule({
  declarations: [
    DetalheListComponent,
    ListagemListComponent
  ],
  exports: [
    ListagemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ItemsModule
  ]
})
export class ListsModule { }
