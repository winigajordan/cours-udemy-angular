import {Component, OnInit} from '@angular/core';
import {Produit} from '../model/produit.model';
import {DatePipe} from '@angular/common';
import {ProduitService} from '../service/produit.service';
import {Router, RouterLink} from '@angular/router';

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

  constructor( private produitService: ProduitService, private router : Router  ) {

  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
    })
  }

  supprimerProduit(prod: Produit) {
    let conf = confirm("Are you sure you want to delete this produit?");
    if (conf) {
      this.produitService.deleteProduit(prod.idProduit).subscribe(
        ()=>{
          console.info("Produit supprimé")
          this.chargerProduits()
          //this.router.navigate(['produits']);
        }
      )
    }
  }
}
