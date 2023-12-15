import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailFactureService } from '../detail-facture.service';
import { DetailFacture } from '../detail-facture';
import { FactureService } from 'src/app/facture/facture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-facture-view',
  templateUrl: './detail-facture-view.component.html',
  styleUrls: ['./detail-facture-view.component.css']
})
export class DetailFactureViewComponent implements OnInit {
  factureDetail: DetailFacture;
  produits: any[]; // Déclarez la liste des produits
  produitId:number;
  constructor(private route: ActivatedRoute, private detailFactureService: DetailFactureService) { }

  ngOnInit(): void {
    const factureDetailId = this.route.snapshot.params['id'];
    this.detailFactureService.getFactureDetailById(factureDetailId).subscribe((factureDetail: DetailFacture) => {
      this.factureDetail = factureDetail;
    });

    this.detailFactureService.getProduits().subscribe((products: any[]) => {
      this.produits = products; // Chargez la liste des produits
    });
   
    this.detailFactureService.getProductPrice(this.produitId).subscribe((prix: number) => {
      // Faites quelque chose avec le prix du produit
    });
  }
  getProductName(produit: any): string {
    if (produit) {
      return produit.designation; // Assurez-vous que le nom de l'attribut correspond à celui dans votre modèle de données
    } else {
      return 'Produit inconnu';
    }
  }
  
  
  /*
  getProductPrice(produitId: number): Observable<number> {
    return this.getProduitPrixById(produitId);
  }
  */

}