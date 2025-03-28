import { Routes } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {AddProduitComponent} from './add-produit/add-produit.component';
import {UpdateProduitComponent} from './update-produit/update-produit.component';
import {RechercheParCategorieComponent} from './recherche-par-categorie/recherche-par-categorie.component';
import {RechercheParNomComponent} from './recherche-par-nom/recherche-par-nom.component';
import {ListeCategorieComponent} from './liste-categorie/liste-categorie.component';

export const routes: Routes = [

  {path:'produits', component: ProduitsComponent},
  {path:'add-produit', component: AddProduitComponent},
  {path:'update-produit/:id', component: UpdateProduitComponent},
  {path:'rechercheParCategorie', component: RechercheParCategorieComponent},
  {path:'rechercheParNom', component: RechercheParNomComponent},
  {path:'listerCategories', component: ListeCategorieComponent},

  {path:'', redirectTo:'produits', pathMatch:'full'},


];
