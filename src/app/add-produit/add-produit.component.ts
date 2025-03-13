import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Produit} from '../model/produit.model';
import {ProduitService} from '../service/produit.service';


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
  message? : string;
  //private produitService = new ProduitService();
  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
  }

  addProduit() {
    //console.log(this.newProduit);
    this.produitService.addProuit(this.newProduit);
    this.message = "Produit "+this.newProduit.nomProduit + " a été enregistré avec succes"
  }

}
