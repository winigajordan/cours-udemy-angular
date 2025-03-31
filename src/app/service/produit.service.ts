import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';
import {Categorie} from '../model/categorie.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';
import {CategorieWrapped} from '../model/categorieWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  produits!: Produit[];
  //categories! : Categorie[];

  constructor(private http: HttpClient) {

  }

  listeProduit() : Observable<Produit[]> {

    return this.http.get<Produit[]>(`${environment.apiURL}/all`);
  }



 listeCategories(): Observable<CategorieWrapped> {

    return this.http.get<CategorieWrapped>(environment.apiUrlCat) ;
  }


  consulterCategorie(id:number): Observable<Categorie>{
    return this.http.get<Categorie>(`${environment.apiURL}/cat/${id}`);
  }


  addProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${environment.apiURL}/addprod`, prod ,httpOptions);
  }


  deleteProduit(id: number){

    const url = `${environment.apiURL}/delprod/${id}`;
    return this.http.delete(url, httpOptions);
  }

  findProduitById(id: number) : Observable<Produit> {

    const url = `${environment.apiURL}/getbyid/${id}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod: Produit) {
    return this.http.put(`${environment.apiURL}/updateprod`, prod,httpOptions);
  }

  rechercherParCategorie(id: number): Observable<Produit[]> {

    const url = `${environment.apiURL}/prodscat/${id}`;
    return this.http.get<Produit[]>(url);
  }

  rechercheParNom(nom:string) : Observable<Produit[]>{
    const url = `${environment.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }

  ajouterCategorie(cat : Categorie) : Observable<Categorie>{

    return this.http.post<Categorie>(environment.apiUrlCat, cat, httpOptions);
  }

}
