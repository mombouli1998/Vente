import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../model/produit';
import { ProduitService } from '../Service/produit.service';
import { Route, Router } from '@angular/router';
import { CategorieService } from '../Service/categorie.service';
import { categorie } from '../model/categorie';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit{

  cate:Array<categorie>=[];
  produitForm!:FormGroup;
  constructor(private http:FormBuilder,private Ps:ProduitService, private route:Router, private categorie:CategorieService){}
  ngOnInit(): void {
    this.produitForm=this.http.group({
      nom:this.http.control('',[Validators.required]),
      prix: this.http.control(0),
      checked: this.http.control(false),
      image: this.http.control('',[Validators.required]),
      quantite: this.http.control(0),
      categorie:this.http.control('',Validators.required),
      Description:this.http.control('',Validators.required)
    })
    this.getCategorie();
  }


  public getCategorie(){
    this.categorie.ListeCategorie().subscribe({
      next:data=>this.cate=data,
      error(err) {
          console.log(err);
      },
    })
  }
  //ajout de produit
  AjouterProdui() {
    let produit:Produit=this.produitForm.value;
    this.Ps.AjoutProdui(produit).subscribe({
      next:data=>{
        alert(JSON.stringify(data))
      },
      error(err) {
          console.log(err);
      },
    });
    this.route.navigateByUrl("/produit");
    }
}
