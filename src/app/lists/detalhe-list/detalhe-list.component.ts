import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detalhe-list',
  templateUrl: './detalhe-list.component.html',
  styleUrls: ['./detalhe-list.component.css']
})
export class DetalheListComponent implements OnInit {

  lista: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    const idCategory = this.route.snapshot.params.idCategory;
    
    this.apiService
      .listar('categories/'+idCategory+'/lists/'+id)
      .subscribe(cat => this.lista = cat);
  }
}
