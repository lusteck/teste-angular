import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemCategoriasComponent } from './categories/listagem-categorias/listagem-categorias.component';
import { DetalheCategoriaComponent } from './categories/detalhe-categoria/detalhe-categoria.component';
import { HomeComponent } from './home/home.component';
import { ListagemListComponent } from './lists/listagem-list/listagem-list.component';
import { DetalheListComponent } from './lists/detalhe-list/detalhe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListagemItemComponent } from './items/listagem-item/listagem-item.component';
import { DetalheItemComponent } from './items/detalhe-item/detalhe-item.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Listagem de Categorias'
        }
    },
    {
        path: 'categories', 
        component: ListagemCategoriasComponent,
        data: {
            title: 'Listagem de Categorias'
        }
    },
    {
        path: 'categorie/:id', 
        component: DetalheCategoriaComponent,
        data: {
            title: 'Detalhe da Categoria'
        }
    },
    {
        path: 'categorie/:id/lists', 
        component: ListagemListComponent,
        data: { 
            title: 'Listas da Categoria'
        }
    },
    {
        path: 'categorie/:idCategory/lists/:id', 
        component: DetalheListComponent,
        data: {
            title: 'Detalhe da Lista'
        }
    },
    {
        path: 'categorie/:idCategory/lists/:idList/items', 
        component: ListagemItemComponent,
        data: {
            title: 'Lista da Lista'
        }
    },
    {
        path: 'categorie/:idCategory/lists/:idList/items/:id', 
        component: DetalheItemComponent,
        data: {
            title: 'Detalhe do Item'
        }
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent,
        data: {
            title: 'Not found'
        }
    },
    { 
        path: '**', 
        redirectTo: 'not-found'
    }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }