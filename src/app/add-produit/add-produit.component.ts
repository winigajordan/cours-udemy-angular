import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Produit} from '../model/produit.model';


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

  constructor() {
  }

  ngOnInit(): void {
  }

  addProduit() {
    console.log(this.newProduit);
  }

}
