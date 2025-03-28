import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-categorie',
  imports: [
    FormsModule
  ],
  templateUrl: './update-categorie.component.html',
  styles: ``
})
export class UpdateCategorieComponent implements OnInit {

  @Input()
  categorie! : Categorie;

  @Input()
  ajout!: boolean;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  constructor() {
  }

  ngOnInit(): void {
        //console.log(this.categorie);
    }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}
