import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
{ path: 'factures', redirectTo: 'facture/index', pathMatch: 'full'},
{ path: 'facture/index', component: IndexComponent },
{ path: 'facture/create', component: CreateComponent },
{ path: 'facture/edit/:id', component: EditComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
