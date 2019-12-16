import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-detalhe-categoria',
  templateUrl: './detalhe-categoria.component.html',
  styleUrls: ['./detalhe-categoria.component.css']
})
export class DetalheCategoriaComponent implements OnInit {
  id: string;
  categoria: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService
      .listar('categories/'+id)
      .subscribe(cat => this.categoria = cat);
  }
}
