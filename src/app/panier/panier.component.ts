import { Component, OnInit } from '@angular/core';
import { PanierService } from '../Service/panier.service';
import { Subscription } from 'rxjs';
import { Panier } from '../model/panier';
import { Produit } from '../model/produit';
import { ReçuService } from '../Service/reçu.service';
import Decimal from 'decimal.js';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panie!: Panier;
  total!: number;
  constructor(private shop: PanierService,private recu:ReçuService) { }

  ngOnInit(): void {
    this.getPanier();
  }
  public getPanier(){
    this.shop.shopObservable.subscribe(panier => {
      this.panie = panier;
   
    });
    this.total=this.panie.total.toNumber();
  }
  acheter() {
    this.recu.Recut(this.panie);
    }
    Delete(arg0: any) {
    this.shop.delete(arg0);
    this.getPanier();
      }
      
 
}
