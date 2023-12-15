import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { FactureService } from '../facture.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  FormGroup: FormGroup;
  facture :any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private factureService: FactureService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.fetchFacture(); 
   }

   fetchFacture(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    // Check if idFromRoute is not null and is a numeric value
    if (idFromRoute !== null && !isNaN(+idFromRoute)) {
      const id = +idFromRoute;
  
      this.factureService.getFactureById(id).subscribe(facture => {
        this.facture = facture;
      });
    }

  }

  onSubmit(): void {
    this.factureService.updateFacture(this.facture.id, this.facture).subscribe(
      () => {
        this.router.navigate(['/facture/index']); // Redirect to the list of devises after updating
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du facture:', error);
      }
    );
  }
  }

