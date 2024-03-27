import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../Service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{


 numePage!:number;
 produitsPage!:Array<Produit>;
 produits!:Array<Produit>;
 recherche!: string;
 page:number=0;
 sa!:Array<number>;
 
 constructor(private PS: ProduitService, private route:Router){}
  ngOnInit(): void {
    // this.getProduits();
     this.pagess(this.page);
  }
  //liste de produits par page
  public getProduitPage(a:number){
    this.PS.ListeProduitsPage(a).subscribe({
      next:data=>{this.produitsPage=data;
       
      },
      error(err) {
          console.log(err);
      },
     })
  }
  //liste des produits
  public getProduits(){
    this.PS.ListeProduits().subscribe({
      next:data=>{this.produits=data;
       // alert(data.length)
        this.numePage=Math.floor(data.length/7);
        if(this.numePage%9!=0){
          this.numePage=this.numePage+1;
        }
       // alert(this.numePage);
      },
      error(err) {
          console.log(err);
      },
    })
  }

  //modification du produit cocher
  cocher(produit: Produit, p:number) {
    this.PS.cocher(produit).subscribe({
      next:data=>{
        this.pagess(p);
      },
      error(err) {
          console.log(err);
      },

    })
    }

    //suppression du produit
    Delete(produit: Produit) {
      if(confirm("confimez vous la suppression du produit ?"+produit.nom))
      this.PS.DeleteProduit(produit).subscribe({
        next:data=>{this.getProduits();},
        error(err) {
            console.log(err)
        },
      })
      }
      //recherche de produit
      Search() {
        this.PS.Recherche(this.recherche).subscribe({
          next:data=>{this.produits=data},
          error(err) {
              console.log(err);
          },
        })        
      }
      Edite(produit: Produit) {
       this.route.navigateByUrl("/edite/"+produit.id);
        }
        
        pagess(a: number) {
          this.getProduits();
          this.page=a
          this.PS.ListeProduitsPage(this.page*7,7).subscribe({
            next:data=>{this.produitsPage=data;
            
            },
            error(err) {
                console.log(err);
            },
           })
          }

}
