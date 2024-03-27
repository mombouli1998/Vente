import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorie } from '../model/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }
  //Recuperer la liste des produits
  public ListeCategorie():Observable<Array<categorie>>{
    return this.http.get<Array<categorie>>("http://localhost:3000/categorie");
}
}
