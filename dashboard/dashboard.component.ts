import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  redirectToLamya(){
    this.router.navigate(['/lamya']);
  }
  redirectToTest(){
    this.router.navigate(['/test']);
  }
  ngOnInit(): void {
  }

}
