import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../Service/produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-edite-produit',
  templateUrl: './edite-produit.component.html',
  styleUrls: ['./edite-produit.component.css']
})
export class EditeProduitComponent implements OnInit{

  produitId:any;
  produitForm!:FormGroup;
  constructor(private active:ActivatedRoute, private ps:ProduitService, private form:FormBuilder, private route:Router){}
  ngOnInit(): void {
    this.produitId=this.active.snapshot.params['id'];
   this.getForm(this.produitId);
  }

  public getForm(a:any){
    this.ps.getProduit(a).subscribe({
      next:data=>{
        this.produitForm=this.form.group({
          id: this.form.control(data.id),
          nom: this.form.control(data.nom),
          prix: this.form.control(data.prix),
          checked: this.form.control(data.checked),
          image: this.form.control(data.image),
          quantite: this.form.control(data.quantite),
          categorie:this.form.control(data.categorie),
          Description:this.form.control(data.Description),
        })
      }
    })
  }
  //modifie la valeur
  Modifie() {
    let produit:Produit=this.produitForm.value;
    this.ps.Modifie(produit).subscribe({
      next:data=>{alert(JSON.stringify(data))},
      error(err) {
          console.log(err);
      },
    });
    
    this.route.navigateByUrl("/produit");
    
  }

}
