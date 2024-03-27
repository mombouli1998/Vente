import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../Service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {

  recherche!:string;
  ListeProduit!:Array<Produit>;
  constructor(private Ps:ProduitService, private route:Router){}
  ngOnInit(): void {
   this.Ps.listCategorie("telephone").subscribe({
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
    alert(this.recherche)
   this.Ps.RechercheProduit("telephone",this.recherche).subscribe({
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
