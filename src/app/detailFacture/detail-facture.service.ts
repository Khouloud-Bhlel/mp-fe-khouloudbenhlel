import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { DetailFacture } from './detail-facture';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {

  private apiUrl = 'http://localhost:8081/factureDetail'; 
  private baseUrl ='http://localhost:8081/';
  public formData:FormGroup;

factures:any;
  constructor(private http: HttpClient) { }


  getFormData() {
    return this.formData;
  }
  // list produit
  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}produits/`);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
   // ajouter detailfacture
   addDetailFacture(detailfacture:any): Observable<any> {

    return this.http.post<any>(this.apiUrl+'/',detailfacture)
    }

    calculeMontant(detailfacture:any): Observable<number> {
      return this.http.post<number>(`${this.apiUrl}/calculeMontant`, detailfacture);
    }
    getProductPrice(produitId: number): Observable<number> {
      return this.getProduitPrixById(produitId).pipe(
        map((prix: number) => {
          return prix;
        })
      );
    }
 
    
  getProduitPrixById(id: number): Observable<number> {
    return this.http.get<any>(`${this.apiUrl}/produits/${id}`).pipe(
      map((product: any) => { // Provide a type for the product parameter
        // Extract the 'prix' property from the product response
        return product.prix as number;
      })
    );
  }
  getFactureDetailById(id: number): Observable<DetailFacture> {
    return this.http.get<DetailFacture>(`${this.apiUrl}/${id}`);
  }

// modifier
  updateDetailFacture(id: number, updateDetailFacture: any): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put(url, updateDetailFacture);
  }
   //supprimer
   deleteDetailFacture(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}`);
  }

  // Exemple de méthode pour récupérer les détails de la facture depuis l'API
  getDetailFacture(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Exemple de méthode pour enregistrer les détails de la facture via l'API
  saveDetailFacture(detailFactureData: any): Observable<any> {
    return this.http.post(this.apiUrl, detailFactureData);
  }

}
