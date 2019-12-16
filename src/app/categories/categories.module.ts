import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListagemCategoriasComponent } from './listagem-categorias/listagem-categorias.component';
import { DetalheCategoriaComponent } from './detalhe-categoria/detalhe-categoria.component';
import { ListsModule } from '../lists/lists.module';
import { FormModule } from '../form/form.module';

@NgModule({
    declarations: [
        ListagemCategoriasComponent,
        DetalheCategoriaComponent,
    ],
    exports: [
        ListagemCategoriasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ListsModule,
        FormModule
    ]
})
export class CategoriesModule { }
