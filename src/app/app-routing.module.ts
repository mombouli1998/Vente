import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { EditeProduitComponent } from './edite-produit/edite-produit.component';
import { AcheterComponent } from './acheter/acheter.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"produit", component:ProduitComponent},
  {path:"newProduit", component:NewProduitComponent},
  {path:"edite/:id", component:EditeProduitComponent},
  {path:"acheter/:id", component:AcheterComponent},
  {path:"telephone", component:TelephoneComponent},
  {path:"bureautique", component:BureautiqueComponent},
  {path:"imprimante", component:ImprimanteComponent},
  {path:"ordinateur", component:OrdinateurComponent},
  {path:"panier", component:PanierComponent},
  {path:"panier/:id", component:PanierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
