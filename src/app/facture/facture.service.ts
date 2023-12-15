import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DetailFacture } from '../detailFacture/detail-facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  
  
  readonly apiUrl = "http://localhost:8081/factures"
 readonly baseUrl="http://localhost:8081/"

  public formData:FormGroup;
  list:DetailFacture[]=[];


   constructor(private http: HttpClient) { }

  // Récupérer toutes les factures
  getFactures(): Observable<any> {
    return this.http.get(this.apiUrl+'/')
  }
  getFormData() {
    return this.formData;
  }
  // Récupérer une facture par son ID
  getFactureById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

    // ajouter facture
    add(fact:any): Observable<any> {
      return this.http.post<any>("http://localhost:8081/factures/",fact)
      }
      // supprimer
  deleteFacture(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
      }  
      generatePDF(factureId: number): Observable<Blob> {
        
        return this.http.get<Blob>(`${this.apiUrl}/${factureId}/pdf`, { responseType: 'blob' as 'json' });
      }
           
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}clients/`);
  }
 
  getDevises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}devises/`);
  }
  


 
updateFacture(id: number, updateFacture: any): Observable<any> {
    const url = `${this.apiUrl}/`;
    return this.http.put(url, updateFacture);
  }
deleteData(id:number) :Observable<any>{
  return this.http.delete(`${this.apiUrl}/${id}`);
}
getAll():Observable<any>{
  return this.http.get(`${this.apiUrl}/`);
}
}
