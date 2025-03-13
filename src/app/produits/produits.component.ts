import {Component, OnInit} from '@angular/core';
import {Produit} from '../model/produit.model';
import {DatePipe} from '@angular/common';
import {ProduitService} from '../service/produit.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [
    DatePipe,
    RouterLink,
  ],
  templateUrl: './produits.component.html',
  styleUrl: ''
})
export class ProduitsComponent implements OnInit {

  produits! : Produit[];

  constructor( private produitService: ProduitService ) {

  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
    }

  supprimerProduit(prod: Produit) {
    let conf = confirm("Are you sure you want to delete this produit?");
    if (conf) {
      this.produitService.deleteProduit(prod);
    }
  }
}
