import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { MenuComponent } from './menu/menu.component';
import { VerifMedComponent } from './verif-med/verif-med.component';
import { HistoriqueConsultationsComponent } from './historique-consultations/historique-consultations.component';
import { HistoriqueOrdonnancesComponent } from './historique-ordonnances/historique-ordonnances.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionsReclamationsComponent } from './suggestions-reclamations/suggestions-reclamations.component';
import { GuideComponent } from './guide/guide.component';
import { HistoriqueComponent } from './historique-ordonnances/historique/historique.component';
import { OrdonnacesComponent } from './historique-ordonnances/ordonnaces/ordonnaces.component';
import { BordereauComponent } from './historique-ordonnances/bordereau/bordereau.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ForgotPasswordComponent, 
    CreateAccountComponent, 
    DashboardComponent, 
    AccountSettingsComponent, 
    AjoutOrdonnanceComponent, 
    MenuComponent, 
    VerifMedComponent, 
    HistoriqueConsultationsComponent, 
    HistoriqueOrdonnancesComponent, 
    SuggestionsReclamationsComponent, 
    GuideComponent, HistoriqueComponent, 
    OrdonnacesComponent, BordereauComponent, TestComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
 }
