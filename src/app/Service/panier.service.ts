import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panier } from '../model/panier';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from '../model/produit';
import Decimal from 'decimal.js';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
 shop: Panier = {
    produits: [], quantite: 0, total: new Decimal(0),
    id: 0
  };
  
  private shopSubject = new BehaviorSubject<Panier>(this.shop);
  shopObservable = this.shopSubject.asObservable();
 constructor(){}
 addPanier(produit:Produit){
  this.shop.produits.push(produit);
  this.shop.quantite = this.shop.produits.length;
  this.shop.total = this.shop.total.plus(produit.prix);
  this.shopSubject.next(this.shop);
 }
 
 delete(produit:Produit){
  this.shop.produits.forEach(Element=>{
    if(produit.nom==Element.nom){
      this.shop.produits.splice(this.shop.produits.indexOf(Element));
      this.shop.total=this.shop.total.minus(Element.prix);
    }
  })
 }
}
