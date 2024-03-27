import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../Service/produit.service';
import { Produit } from '../model/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bureautique',
  templateUrl: './bureautique.component.html',
  styleUrls: ['./bureautique.component.css']
})
export class BureautiqueComponent implements OnInit {


  recherche!:string;
  ListeProduit!:Array<Produit>;
  constructor(private Ps:ProduitService, private route:Router){}
  ngOnInit(): void {
   this.Ps.listCategorie("bureautique").subscribe({
    next:data=>{
      this.ListeProduit=data;
    },
    error(err) {
        console.log(err);
    },
   })
  }
  //recherche des produits de bureautiques
  Search() {
   this.Ps.RechercheProduit("bureautique",this.recherche).subscribe({
    next:data=>{this.ListeProduit=data},
    error(err) {
        console.log(err);
    },
   })
    }
    //acheter le produit
    acheter(produit: Produit) {
      this.route.navigateByUrl("/acheter/"+produit.id);
      }

}
