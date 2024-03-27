import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../Service/produit.service';
import { disableDebugTools } from '@angular/platform-browser';
import { Produit } from '../model/produit';
import { ReçuService } from '../Service/reçu.service';
import { PanierService } from '../Service/panier.service';
import { Panier } from '../model/panier';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {
 
  products:Array<Produit>=[];
  ImageProduit:any;
  productId:any;
  produitForm!:FormGroup
  produitModif!:Produit;
  constructor( private active: ActivatedRoute, private PS:ProduitService, private form:FormBuilder, private route: Router, private reçu:ReçuService, private panier: PanierService){}
  ngOnInit(): void {
   this.productId=this.active.snapshot.params['id'];
   this.PS.getProduit(this.productId).subscribe({
    next:data=>{
      this.produitForm=this.form.group({
        id: this.form.control(data.id),
        nom: this.form.control({value:data.nom,disabled:true}),
        prix: this.form.control({value:data.prix,disabled:true}),
        checked: this.form.control({value:data.checked,disabled:true}),
        image: this.form.control(data.image),
        quantite: this.form.control({value:data.quantite,disabled:true}),
        Description:this.form.control({value:data.Description,disabled:true})
      });
      this.ImageProduit=data.image;
      this.produitModif=data;
    }
   })
   }
   //achat du produit
  Acheter() {
    this.produitModif.quantite= this.produitModif.quantite-1;
    this.PS.Modifie( this.produitModif).subscribe({
      next:data=>{
        alert("produit acheter");
      },
      error(err) {
          console.log(err);
      },
    });
      
    this.route.navigateByUrl("/home")
  // this.reçu.Recu(this.produitModif);
   this.panier.addPanier(this.produitModif);
  }
 

}
