import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Categoria } from 'src/app/categoria';

@Component({
  selector: 'app-listagem-item',
  templateUrl: './listagem-item.component.html',
  styleUrls: ['./listagem-item.component.css']
})
export class ListagemItemComponent implements OnInit {

    items: Categoria[] = [];

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        const idCategory = this.route.snapshot.params.idCategory;
        
        this.apiService
            .listar('categories/'+idCategory+'/lists/'+id)
            .subscribe(items => this.items = items );
    }
}
