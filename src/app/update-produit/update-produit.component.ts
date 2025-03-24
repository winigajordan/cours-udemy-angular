import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../service/produit.service';
import {Produit} from '../model/produit.model';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Categorie} from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent  implements OnInit {

  currentProduit! :  Produit;
  categories! : Categorie[];
  updatedCatId! : number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.produitService.findProduitById(this.activatedRoute.snapshot.params['id']).subscribe(
      prod =>{
        this.currentProduit = prod;
        this.updatedCatId = this.currentProduit.categorie.idCat;
      }
    );
    this.produitService.listeCategories().subscribe(
      data => {
        this.categories = data;
      }
    )


     this.updatedCatId = this.currentProduit.categorie.idCat;
    }

  updateProduit() {
      //console.log(this.currentProduit);
    //this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
    this.currentProduit.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit)
      .subscribe(
      ()=>{
        this.router.navigate(['/produits']);
      }
    );

  }
}
