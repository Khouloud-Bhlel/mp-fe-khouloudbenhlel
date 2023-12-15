import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureRoutingModule } from './facture-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent,
    CreateComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FactureRoutingModule,
    FormsModule
  ]
})
export class FactureModule { }

