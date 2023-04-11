import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewClientComponent } from './pages/client/view-client/view-client.component';

import { AddClientComponent } from './pages/client/add-client/add-client.component';
import { UpdateComponent } from './pages/client/update/update.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ViewClientComponent},
  { path: 'clientes/cadastrar', component: AddClientComponent},
  { path: 'clientes/editar/:cpf', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
