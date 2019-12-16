import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from './categoria';

const API_URL = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  listar(url: string){
    return this.http.get<Categoria[]>(API_URL + url);
  }
}
