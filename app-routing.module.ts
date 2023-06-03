import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { VerifMedComponent } from './verif-med/verif-med.component';
import { HistoriqueOrdonnancesComponent } from './historique-ordonnances/historique-ordonnances.component';
import { HistoriqueConsultationsComponent } from './historique-consultations/historique-consultations.component';
import { SuggestionsReclamationsComponent } from './suggestions-reclamations/suggestions-reclamations.component';
import { GuideComponent } from './guide/guide.component';
import { HistoriqueComponent } from './historique-ordonnances/historique/historique.component';
import { LamyaComponent } from './lamya/lamya.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'create-account' , component: CreateAccountComponent},
  { path: 'forgot-password' , component: ForgotPasswordComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'account-settings' , component: AccountSettingsComponent},
  { path: 'ajout-ordonnance' , component: AjoutOrdonnanceComponent},
  { path: 'verif-med' , component: VerifMedComponent},
  { path: 'historique-ordonnances' , component: HistoriqueOrdonnancesComponent},
  { path: 'historique-consultations' , component: HistoriqueConsultationsComponent},
  { path: 'suggestions-reclamations' , component: SuggestionsReclamationsComponent},
  { path: 'guide' , component: GuideComponent},
  { path: 'historique' , component: HistoriqueComponent},
  { path: 'lamya' , component: LamyaComponent},
  { path: 'test' , component: TestComponent},



  { path: '' , redirectTo: 'login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
