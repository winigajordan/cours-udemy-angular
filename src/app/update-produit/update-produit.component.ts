import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../service/produit.service';
import {Produit} from '../model/produit.model';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

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

  currentProduit = new Produit();


  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.currentProduit = this.produitService.findProduitById(this.activatedRoute.snapshot.params['id'])
      console.log(this.currentProduit)
    }

  updateProduit() {
      //console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit)
    this.router.navigate(['/produits']);
  }
}
