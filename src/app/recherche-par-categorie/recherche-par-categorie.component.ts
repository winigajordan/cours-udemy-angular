import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Produit} from '../model/produit.model';
import {FormsModule} from '@angular/forms';
import {Categorie} from '../model/categorie.model';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [
    DatePipe,
    FormsModule
  ],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent implements OnInit {

  produits! : Produit[];
  IdCategorie! : number;
  categories!: Categorie[];

  constructor(private produitService: ProduitService,) {
  }

  ngOnInit(): void {
      this.produitService.listeCategories().subscribe(
        data => {
          this.categories = data._embedded.categories;
          console.log(this.categories);
        }
      )
  }

  onChange(){
    this.produitService.rechercherParCategorie(this.IdCategorie).subscribe(
      data => {
        this.produits = data;
      }
    )
  }



}
