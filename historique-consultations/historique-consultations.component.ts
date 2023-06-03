import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique-consultations',
  templateUrl: './historique-consultations.component.html',
  styleUrls: ['./historique-consultations.component.scss']
})
export class HistoriqueConsultationsComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToAccountSettings(){
    this.router.navigate(['/account-settings'], {replaceUrl:true});
  }

  redirectToAjoutOrdonnance(){
    this.router.navigate(['/ajout-ordonnance'], {replaceUrl:true});
  }
  
  RedirectToVerifMed(){
    this.router.navigate(['/verif-med'], {replaceUrl:true});
  }

  redirectToHistorique(){
    this.router.navigate(['/historique-ordonnances'], {replaceUrl:true});
  }

  redirectToSugRec(){
    this.router.navigate(['/suggestions-reclamations'], {replaceUrl:true});
  }

  RedirectToGuide(){
    this.router.navigate(['/guide'], {replaceUrl:true});
  }

  redirectToDashboard(){
    this.router.navigate(['/dashboard'], {replaceUrl:true});
  }

  redirectToConsultations(){
    this.router.navigate(['/historique-consultations'], {replaceUrl:true});
  }

  ngOnInit(): void {
  }

}
