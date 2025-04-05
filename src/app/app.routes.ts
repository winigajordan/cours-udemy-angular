import { Routes } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {AddProduitComponent} from './add-produit/add-produit.component';
import {UpdateProduitComponent} from './update-produit/update-produit.component';
import {RechercheParCategorieComponent} from './recherche-par-categorie/recherche-par-categorie.component';
import {RechercheParNomComponent} from './recherche-par-nom/recherche-par-nom.component';
import {ListeCategorieComponent} from './liste-categorie/liste-categorie.component';
import {LoginComponent} from './login/login.component';
import {ForbidenComponent} from './forbiden/forbiden.component';
import {produitGuard} from './produit.guard';
import {RegisterComponent} from './register/register.component';
import {VerifEmailComponent} from './verif-email/verif-email.component';

export const routes: Routes = [

  {path:'produits', component: ProduitsComponent},
  {path:'add-produit', component: AddProduitComponent, canActivate:[produitGuard]},
  {path:'update-produit/:id', component: UpdateProduitComponent,  canActivate:[produitGuard]},
  {path:'rechercheParCategorie', component: RechercheParCategorieComponent},
  {path:'rechercheParNom', component: RechercheParNomComponent},
  {path:'listerCategories', component: ListeCategorieComponent,  canActivate:[produitGuard]},
  {path:'login', component: LoginComponent},
  {path:'app-forbiden', component: ForbidenComponent},
  {path:'register', component: RegisterComponent},
  {path:'verif-email', component: VerifEmailComponent},



  {path:'', redirectTo:'produits', pathMatch:'full'},


];
