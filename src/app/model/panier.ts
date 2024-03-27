import Decimal from "decimal.js";
import { Produit } from "./produit";

export interface Panier{
   id?:number,
    produits:Produit[],
   quantite:number,
   total: Decimal
}