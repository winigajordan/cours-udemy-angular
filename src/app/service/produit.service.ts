import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';
import {Categorie} from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : Produit[];
  categories! : Categorie[];
  constructor() {

    this.categories = [
      { idCat: 1, nomCat: 'Électronique' },
      { idCat: 2, nomCat: 'Mode' },
      { idCat: 3, nomCat: 'Maison et Jardin' },
      { idCat: 4, nomCat: 'Sport' },
      { idCat: 5, nomCat: 'Alimentation' }
    ];

    this.produits =[
      { idProduit: 1, nomProduit: 'Smartphone Galaxy', prixProduit: 999, dateCreation: new Date('2023-01-10'), categorie: { idCat: 1, nomCat: 'Électronique' } },
      { idProduit: 2, nomProduit: 'Laptop HP Pavilion', prixProduit: 849, dateCreation: new Date('2022-06-15'), categorie: { idCat: 1, nomCat: 'Électronique' } },
      { idProduit: 3, nomProduit: 'Casque Sony', prixProduit: 129, dateCreation: new Date('2024-02-20'), categorie: { idCat: 1, nomCat: 'Électronique' } },
      { idProduit: 4, nomProduit: 'Montre Connectée Garmin', prixProduit: 199, dateCreation: new Date('2023-03-05'), categorie: { idCat: 2, nomCat: 'Mode' } },
      { idProduit: 5, nomProduit: 'T-shirt Nike', prixProduit: 29, dateCreation: new Date('2023-07-01'), categorie: { idCat: 2, nomCat: 'Mode' } },
      { idProduit: 6, nomProduit: 'Chaussures Adidas', prixProduit: 120, dateCreation: new Date('2021-11-21'), categorie: { idCat: 2, nomCat: 'Mode' } },
      { idProduit: 7, nomProduit: 'Écouteurs Bose', prixProduit: 169, dateCreation: new Date('2022-12-17'), categorie: { idCat: 1, nomCat: 'Électronique' } },
      { idProduit: 8, nomProduit: 'Veste en Cuir', prixProduit: 250, dateCreation: new Date('2023-04-13'), categorie: { idCat: 2, nomCat: 'Mode' } },
      { idProduit: 9, nomProduit: 'Table de Salle à Manger', prixProduit: 299, dateCreation: new Date('2023-08-30'), categorie: { idCat: 3, nomCat: 'Maison et Jardin' } },
      { idProduit: 10, nomProduit: 'Fauteuil Relax', prixProduit: 399, dateCreation: new Date('2023-01-15'), categorie: { idCat: 3, nomCat: 'Maison et Jardin' } },
      { idProduit: 11, nomProduit: 'Chaise de Bureau Ergonomique', prixProduit: 150, dateCreation: new Date('2023-01-30'), categorie: { idCat: 3, nomCat: 'Maison et Jardin' } },
      { idProduit: 12, nomProduit: 'Brouette', prixProduit: 85, dateCreation: new Date('2022-04-05'), categorie: { idCat: 3, nomCat: 'Maison et Jardin' } },
      { idProduit: 13, nomProduit: 'Vélo de Route', prixProduit: 599, dateCreation: new Date('2023-07-12'), categorie: { idCat: 4, nomCat: 'Sport' } },
      { idProduit: 14, nomProduit: 'Raquette de Tennis Wilson', prixProduit: 89, dateCreation: new Date('2023-02-25'), categorie: { idCat: 4, nomCat: 'Sport' } },
      { idProduit: 15, nomProduit: 'Paire de Gants de Boxe', prixProduit: 40, dateCreation: new Date('2022-09-08'), categorie: { idCat: 4, nomCat: 'Sport' } },
      { idProduit: 16, nomProduit: 'Sac de Foot Adidas', prixProduit: 50, dateCreation: new Date('2022-12-19'), categorie: { idCat: 4, nomCat: 'Sport' } },
      { idProduit: 17, nomProduit: 'Bouteille d\'Eau Isotherme', prixProduit: 25, dateCreation: new Date('2023-09-01'), categorie: { idCat: 4, nomCat: 'Sport' } },
      { idProduit: 18, nomProduit: 'Café en Grains Lavazza', prixProduit: 15, dateCreation: new Date('2023-01-10'), categorie: { idCat: 5, nomCat: 'Alimentation' } },
      { idProduit: 19, nomProduit: 'Pâtes Barilla', prixProduit: 2, dateCreation: new Date('2024-02-18'), categorie: { idCat: 5, nomCat: 'Alimentation' } },
      { idProduit: 20, nomProduit: 'Huile d\'Olive Bio', prixProduit: 12, dateCreation: new Date('2023-03-10'), categorie: { idCat: 5, nomCat: 'Alimentation' } }
    ];
  }

  listeProduit() : Produit[]{
    return this.produits;
  }

  listeCategories(): Categorie[]{
    return this.categories;
  }

  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat  == id)!;
  }


  addProuit(Produit: Produit) {
    this.produits.push(Produit);
  }

  deleteProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  findProduitById(idProduit: number) : Produit {
    return  this.produits.find(produit => produit.idProduit == idProduit)!;
    //return this.produit;
  }

  updateProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
      this.produits.splice(index, 0, prod);
    }
  }

}
