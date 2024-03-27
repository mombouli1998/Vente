import { Component, OnInit } from '@angular/core';
import { PanierService } from './Service/panier.service';
import { Panier } from './model/panier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre:number=0;
  pani!:Panier;
 constructor(private panier:PanierService){}
  ngOnInit(): void {
    this.nombre=this.panier.shop.quantite;
  }
  
  actions:Array<any>=[
    {title:"Accueil" ,"router":"/home", icon:"bi bi-house"},
    {title:"Telephone" ,"router":"/telephone", icon:"bi bi-phone"},
    {title:"Bureautique" ,"router":"/bureautique", icon:"bi bi-easel2"},
    {title:"Consoles" ,"router":"/ordinateur", icon:"bi bi-joystick"},
    {title:"Jeux-Vidéo" ,"router":"/imprimante", icon:"bi bi-dpad-fill"},
    {title:"Produit" ,"router":"/produit", icon:"bi bi-arrow-down-up"},
    {title:"New_Produit" ,"router":"/newProduit", icon:"bi bi-plus-circle"},
    {title:"" ,"router":"/panier", icon:"bi bi-basket"},
  ]
  actioncourante:any;
  ActionC(_t5: any) {
      this.actioncourante=_t5;
    }
}
