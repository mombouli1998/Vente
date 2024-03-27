import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  //Recuperer la liste des produits
  public ListeProduitsPage(page:number=1,size:number=5):Observable<Array<Produit>>{
    //let size:number=5;
    return this.http.get<Array<Produit>>(`http://localhost:3000/produits?_start=${page}&_limit=${size}`);
}
  //Recuperer la liste des produits
  public ListeProduits():Observable<Array<Produit>>{
      return this.http.get<Array<Produit>>("http://localhost:3000/produits");
  }
  //modifier le produit cocher
  public cocher(produit:Produit):Observable<Produit>{
    return this.http.patch<Produit>("http://localhost:3000/produits/"+produit.id,{checked:!produit.checked});
  }
  //supprimer le produit
  public DeleteProduit(produit:Produit){
    return this.http.delete<Produit>("http://localhost:3000/produits/"+produit.id,);
  }
  //ajouter un produit
  public AjoutProdui(produit:Produit){
    return this.http.post<Produit>("http://localhost:3000/produits",produit);
  }
  //recherche de produit
  public Recherche(valeur:string):Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>("http://localhost:3000/produits?nom="+valeur);
  }
  //retourn le produit id
  public getProduit(id:any):Observable<Produit>{
    return this.http.get<Produit>("http://localhost:3000/produits/"+id);
  }
  //modifie le produit
  public Modifie(produit:Produit):Observable<Produit>{
    return this.http.put<Produit>("http://localhost:3000/produits/"+produit.id,produit);
  }
  //liste des produits categorie 
  public listCategorie(valeur:string):Observable<Array<Produit>>{
    
    return this.http.get<Array<Produit>>("http://localhost:3000/produits?categorie="+valeur);
  }
  //recherche de produit par rapport à leur categorie
  public RechercheProduit(valeur:string,objet:string):Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(`http://localhost:3000/produits?nom=${objet}&categorie=${valeur}`);
  }
}
