import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FactureService } from '../facture.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [DatePipe]  // Add DatePipe to the providers array
})
export class IndexComponent implements OnInit {
  factures: any;
  detailfacture:any;
  jsPDF: any;
  detail: any[] = [];

  constructor(
    public factureService: FactureService,
    private router: Router,
    private datePipe: DatePipe  // Inject DatePipe
  ) {}

  loadFactures(): void {
    this.factureService.getAll().subscribe(
      (dateFact) => {
        this.factures = dateFact;
        this.formatDate();  // Format dates after loading
      },
      (error) => {
        console.log('Error fetching facture', error);
      }
    );
  }

  formatDate(): void {
    this.factures.forEach((facture: any) => {
      facture.dateFact = this.datePipe.transform(facture.dateFact, 'dd/MM/yyyy HH:mm:ss');
    });
  }
  

  deleteFacture(id: number): void {
    // Confirm the deletion with the user
    if (confirm('Are you sure you want to delete this Facture?')) {
      this.factureService.deleteFacture(id).subscribe(
        () => {
          console.log('Facture deleted successfully.');
          // Reload the list of devises after deletion
          this.loadFactures();
        
        },
        (error) => {
          console.error('Error deleting Facture', error);
        }
      );
    }
  }  

  editFacture(id: number): void {
    this.router.navigate(['facture/edit', id]);
  }
  
downloadPDF(facture: any, detail: any) {
  const doc = new jsPDF();
  doc.text(`Facture ${facture.id}`, 10, 10);
  doc.text(`Numero: ${facture.numero}`, 10, 20);
  doc.text(`Date: ${facture.dateFact}`, 10, 30);
  doc.text(`Client: ${facture.responsable.nom}`, 10, 40);
  doc.text(`Devise: ${facture.devise.symbole}`, 10, 50);
  // Ajoutez d'autres détails de facture selon vos besoins

  // Ajoutez les détails de la facture
  doc.text('Détails de la facture :', 10, 60);
  let y = 70;
  detail.forEach((item: any) => {
    doc.text(`Détail: ${item.description}`, 10, y);
    // Ajoutez d'autres détails de facture selon vos besoins
    y += 10;
  });

  // Enregistrez le PDF
  doc.save('facture.pdf');
}
  
 

  ngOnInit() {
    this.loadFactures();
  }
}
