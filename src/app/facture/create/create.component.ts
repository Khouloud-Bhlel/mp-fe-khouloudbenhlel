import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FactureService } from '../facture.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  clients: any[];
  devises: any[];
formData:FormGroup;
formBuilder: any;
factures = {
  numero: 0,
  dateFact: '',
  responsable:[''],
  devise:[''],
  
};
constructor(
  public factureService: FactureService,
  private fb: FormBuilder,
  private router: Router,
 public currentRoute:ActivatedRoute
  
) {
  this.formData = this.fb.group({
    numero: [''],
    dateFact: [''],
    responsable: [''],
    devise: ['']
  });
}


  onSubmit() {
    const factures = this.formData.value;

    this.factureService.add(this.factures).subscribe(()=>{
        this.router.navigate(['/factures']);
    
    });
  }
  
 
  
  ngOnInit(): void {
    this.loadClients();
    this.loadDevises();
  }

  loadClients() {
    this.factureService.getClients().subscribe((data: any) => {
      this.clients = data;
    });
  }

  loadDevises() {
    this.factureService.getDevises().subscribe((data: any) => {
      this.devises = data;
    });
  }



}
