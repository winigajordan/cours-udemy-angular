import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Produit} from '../model/produit.model';
import {ProduitService} from '../service/produit.service';
import {Categorie} from '../model/categorie.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-produit',
  imports: [
    FormsModule
  ],
  templateUrl: './add-produit.component.html',
  styleUrl: '.'
})
export class AddProduitComponent implements OnInit {



  newProduit = new Produit();


  newIdCat! : number;
  categories! : Categorie[];
  newCategorie!: Categorie;



  //private produitService = new ProduitService();
  constructor(
    private produitService: ProduitService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
      this.categories = this.produitService.categories;
  }

  addProduit() {
    //console.log(this.newProduit);
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.addProuit(this.newProduit);
   // this.message = "Produit "+this.newProduit.nomProduit + " a été enregistré avec succes"
    this.router.navigate(['produits']);
  }

}
