import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
    selector: 'app-listagem-categorias',
    templateUrl: './listagem-categorias.component.html',
    styleUrls: ['./listagem-categorias.component.css']
})
export class ListagemCategoriasComponent implements OnInit {
    categorias: any[] = [];

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit() {
        this.apiService
            .listar('categories')
            .subscribe(cats => this.categorias = cats);
    }
}