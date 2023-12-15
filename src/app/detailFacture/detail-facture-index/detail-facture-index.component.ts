import { Component, OnInit } from '@angular/core';
import { DetailFactureService } from '../detail-facture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-facture-index',
  templateUrl: './detail-facture-index.component.html',
  styleUrls: ['./detail-facture-index.component.css']
})
export class DetailFactureIndexComponent implements OnInit{

  detailfacture: any=[] ;
constructor(
  private detailfactureService:DetailFactureService,
  private router: Router
  
){

}
ngOnInit(): void {
this.loadDetailFacture()
}
loadDetailFacture(){
  this.detailfactureService.getAll().subscribe(
    (data) => {
      this.detailfacture = data;
    },
    (error) => {
      console.log('Error fetching detail facture', error);
    }
  );
}

deleteDetailFacture(id: number): void {
  // Confirm the deletion with the user
  if (confirm('Are you sure you want to delete this detail?')) {
    this.detailfactureService.deleteDetailFacture(id).subscribe(
      () => {
        console.log('detail deleted successfully.');
        // Reload the list of devises after deletion
        this.loadDetailFacture();
      },
      (error) => {
        console.error('Error deleting detail', error);
      }
    );
  }
}
}

