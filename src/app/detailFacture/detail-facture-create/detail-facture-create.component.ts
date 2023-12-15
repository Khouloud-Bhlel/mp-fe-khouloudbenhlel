import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailFactureService } from '../detail-facture.service';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/facture/facture.service';

@Component({
  selector: 'app-detail-facture-create',
  templateUrl: './detail-facture-create.component.html',
  styleUrls: ['./detail-facture-create.component.css']
})
export class DetailFactureCreateComponent implements OnInit {
  formData: FormGroup;
  produits: any[]; // Assurez-vous que le type de produits correspond à votre modèle de données
  prix: number; // Déclarez la propriété prix
  factures:any[];

  constructor(
    private detailFactureService: DetailFactureService,
    private router: Router,
    private fb: FormBuilder,
    public factureService :FactureService,

  ) {}

  ngOnInit(): void {

    this.InfoForm();
    this.factureService.getAll().subscribe(
      (data:any) => {
        this.factures =data;
       
      
      }
    );
    this.detailFactureService.getProduits().subscribe((data: any) => {
      this.produits = data; // Assurez-vous que la structure des données renvoyées par le service est correcte
    });
  }
 

  InfoForm() {
    this.formData = this.fb.group({
      produit: ['', Validators.required],
      quantite: [0, Validators.required],
      prix: [0, Validators.required],
      montant: [0, Validators.required],
      facture: ['', Validators.required]

    });
  }

  selectPrice(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    if (selectedIndex === 0) {
      this.prix = 0;
    } else {
      this.prix = this.produits[selectedIndex - 1].prix;
    }
    this.cal();
  }
  

  cal() {
    const quantite = this.formData.value.quantite;
    const prix = this.prix;
    const montantControl = this.formData.get('montant');
    if (montantControl) {
      montantControl.setValue(quantite * prix);
    }
    this.formData.patchValue({ prix: prix }); // Mettre à jour la valeur du prix dans le formulaire
  }

  onSubmit() {
    const detailFacture = this.formData.value;
    this.detailFactureService.addDetailFacture(detailFacture).subscribe(() => {
      this.router.navigate(['/factures']);
    });
  }
}
