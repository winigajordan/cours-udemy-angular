import { Routes } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {AddProduitComponent} from './add-produit/add-produit.component';

export const routes: Routes = [

  {path:'', redirectTo:'produits', pathMatch:'full'},
  {path:'produits', component: ProduitsComponent},
  {path:'add-produit', component: AddProduitComponent},

];
