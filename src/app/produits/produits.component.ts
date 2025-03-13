import { Component } from '@angular/core';
import {Produit} from '../model/produit.model';
import {DatePipe} from '@angular/common';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-produits',
  imports: [
    DatePipe,
  ],
  templateUrl: './produits.component.html',
  styleUrl: ''
})
export class ProduitsComponent {

  produits! : Produit[];

  constructor( private produitService: ProduitService ) {

    this.produits = produitService.listeProduit();

  }

}
