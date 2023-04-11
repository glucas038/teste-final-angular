import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownbuttonComponent } from './components/dropdownbutton/dropdownbutton.component';
import { AddClientComponent } from './pages/client/add-client/add-client.component';
import { ViewClientComponent } from './pages/client/view-client/view-client.component';

// Módulo de chamas Http
import { HttpClientModule } from '@angular/common/http';

// Módulo para trabalhar com formulários
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './pages/client/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    HomeComponent,
    SidebarComponent,
    DropdownbuttonComponent,
    AddClientComponent,
    ViewClientComponent,
    UpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
