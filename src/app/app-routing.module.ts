import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ModificaComponent } from './modifica/modifica.component';



const routes: Routes = [
  {path:'',component:TableComponent},
 { path: 'modifica/:id', component: ModificaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
