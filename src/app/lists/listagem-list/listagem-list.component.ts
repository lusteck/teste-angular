import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-listagem-list',
    templateUrl: './listagem-list.component.html',
    styleUrls: ['./listagem-list.component.css']
})
export class ListagemListComponent implements OnInit {
    idCategory: string;
    id: string;
    listas: any[] = [];

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.route.params.subscribe(id => this.idCategory = id.id);
        
        this.apiService
            .listar('categories/'+id+'/lists')
            .subscribe(cats => this.listas = cats);
    }
}