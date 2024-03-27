import Decimal from "decimal.js";

export interface Produit{
    id?:number,
    nom:string,
    prix:Decimal,
    checked:boolean, 
    image:string,
    quantite:number, 
    categorie:string,
    Description:string
}