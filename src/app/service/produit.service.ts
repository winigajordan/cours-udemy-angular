import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : Produit[];

  constructor() {

    this.produits = [
      { idProduit: 1, nomProduit: 'Téléphone', prixProduit: 299, dateCreation: new Date('2023-01-10') },
      { idProduit: 2, nomProduit: 'Ordinateur Portable', prixProduit: 799, dateCreation: new Date('2022-06-15') },
      { idProduit: 3, nomProduit: 'Tablette', prixProduit: 199, dateCreation: new Date('2024-02-20') },
      { idProduit: 4, nomProduit: 'Casque Audio', prixProduit: 89, dateCreation: new Date('2023-03-05') },
      { idProduit: 5, nomProduit: 'Montre Connectée', prixProduit: 120, dateCreation: new Date('2023-07-01') },
      { idProduit: 6, nomProduit: 'Clavier', prixProduit: 49, dateCreation: new Date('2021-11-21') },
      { idProduit: 7, nomProduit: 'Souris', prixProduit: 29, dateCreation: new Date('2022-12-17') },
      { idProduit: 8, nomProduit: 'Enceinte Bluetooth', prixProduit: 59, dateCreation: new Date('2023-04-13') },
      { idProduit: 9, nomProduit: 'Écran PC', prixProduit: 250, dateCreation: new Date('2023-08-30') },
      { idProduit: 10, nomProduit: 'Webcam', prixProduit: 40, dateCreation: new Date('2022-09-08') },
      { idProduit: 11, nomProduit: 'Disque Dur Externe', prixProduit: 99, dateCreation: new Date('2021-05-23') },
      { idProduit: 12, nomProduit: 'Imprimante', prixProduit: 150, dateCreation: new Date('2023-01-15') },
      { idProduit: 13, nomProduit: 'Câble USB', prixProduit: 10, dateCreation: new Date('2024-01-10') },
      { idProduit: 14, nomProduit: 'Chargeur sans Fil', prixProduit: 45, dateCreation: new Date('2023-09-30') },
      { idProduit: 15, nomProduit: 'Disque SSD', prixProduit: 120, dateCreation: new Date('2023-02-14') },
      { idProduit: 16, nomProduit: 'Adaptateur HDMI', prixProduit: 15, dateCreation: new Date('2022-04-20') },
      { idProduit: 17, nomProduit: 'Haut-Parleur', prixProduit: 75, dateCreation: new Date('2023-10-02') },
      { idProduit: 18, nomProduit: 'Projecteur', prixProduit: 350, dateCreation: new Date('2024-03-01') },
      { idProduit: 19, nomProduit: 'Lampes LED', prixProduit: 20, dateCreation: new Date('2021-08-17') },
      { idProduit: 20, nomProduit: 'Clé USB', prixProduit: 15, dateCreation: new Date('2023-07-25') }
    ];
  }

  listeProduit() : Produit[]{
    return this.produits;
  }
}
