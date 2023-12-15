import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFactureIndexComponent } from './detail-facture-index/detail-facture-index.component';

import { DetailFactureCreateComponent } from './detail-facture-create/detail-facture-create.component';
import { DetailFactureViewComponent } from './detail-facture-view/detail-facture-view.component';

const routes: Routes = [
{ path: 'detailfacture', redirectTo: 'detailfacture/index', pathMatch: 'full'},
{ path: 'detailfacture/index', component: DetailFactureIndexComponent },
{ path: 'detailfacture/create', component: DetailFactureCreateComponent },
{ path: 'detailfacture/view/:id', component: DetailFactureViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailFactureRoutingModule { }
