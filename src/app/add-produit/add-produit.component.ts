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

  constructor(
    private produitService: ProduitService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
     this.produitService.listeCategories().subscribe(
       cats => {
         console.log(cats);
         this.categories = cats._embedded.categories;
       }
     );
  }

  addProduit() {
      this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
      this.produitService.addProduit(this.newProduit).subscribe(
        data => {
          console.log(data);
          console.log(data);
          this.router.navigate(['produits']);
        }
      )
  }

}
