import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Produit} from '../model/produit.model';
import {ProduitService} from '../service/produit.service';
import {SearchFilterPipe} from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [
    DatePipe,

    FormsModule,
    SearchFilterPipe
  ],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  nomProduit!: string;
  produits!: Produit[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService : ProduitService) {
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(
      produits => {
        this.produits = produits;
      }
    )
    }

  rechercherProds() {
    if (this.nomProduit){
      this.produitService.rechercheParNom(this.nomProduit).subscribe(
        produits => {
          this.produits = produits;
        }
      )
    } else {
      this.produitService.listeProduit().subscribe(
        prods => {
          this.produits = prods;
        }
      )
    }

  }

  onKeyUp(value: string) {
    this.produits = this.allProduits.filter(
      item => item.nomProduit.toLowerCase().includes(value.toLowerCase())    )
  }
}
