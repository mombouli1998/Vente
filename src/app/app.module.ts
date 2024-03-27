import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditeProduitComponent } from './edite-produit/edite-produit.component';
import { AcheterComponent } from './acheter/acheter.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { PanierComponent } from './panier/panier.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    NewProduitComponent,
    EditeProduitComponent,
    AcheterComponent,
    TelephoneComponent,
    BureautiqueComponent,
    OrdinateurComponent,
    ImprimanteComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
