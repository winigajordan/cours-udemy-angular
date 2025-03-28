import {Component, OnInit} from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {ProduitService} from '../service/produit.service';
import {UpdateCategorieComponent} from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-liste-categorie',
  imports: [
    UpdateCategorieComponent
  ],
  templateUrl: './liste-categorie.component.html',
  styles: ``
})
export class ListeCategorieComponent implements OnInit {

  categories!: Categorie[];
  ajout: boolean = true;

  updateCategorie: Categorie = {
    "idCat" : 0,
    "nomCat" : "Nom Cat 0"
  };

    constructor(private produitService: ProduitService) {
    }


    ngOnInit(): void {
       this.chargerCategorie()
    }

    chargerCategorie(){
      this.produitService.listeCategories().subscribe(
        data => {
          this.categories = data._embedded.categories;
        }
      )
    }


  categorieUpdated(cat: Categorie) {
    //console.log(cat);
    this.produitService.ajouterCategorie(cat).subscribe(
      ()=>{
        this.chargerCategorie();
      }
    )
  }

  updateCat(cat: Categorie) {
    this.ajout = false;
    this.updateCategorie = cat;

  }
}
