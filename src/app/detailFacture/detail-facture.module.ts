import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFactureRoutingModule } from './detail-facture-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailFactureIndexComponent } from './detail-facture-index/detail-facture-index.component';
import { DetailFactureCreateComponent } from './detail-facture-create/detail-facture-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailFactureViewComponent } from './detail-facture-view/detail-facture-view.component';


@NgModule({
  declarations: [
    DetailFactureCreateComponent,
    DetailFactureIndexComponent,
    DetailFactureViewComponent,
    

    
  ],
  imports: [
    FormsModule,
    CommonModule,
    DetailFactureRoutingModule,
    MatDialogModule,
    ReactiveFormsModule

  ]
})
export class DetailFactureModule { }
