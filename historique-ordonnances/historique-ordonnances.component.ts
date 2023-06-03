import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contractantService } from '../services/contractant.service';

@Component({
  selector: 'app-historique-ordonnances',
  templateUrl: './historique-ordonnances.component.html',
  styleUrls: ['./historique-ordonnances.component.scss']
})
export class HistoriqueOrdonnancesComponent implements OnInit {

  constructor(private router: Router, private contractantService :contractantService ) { }

  redirectToAccountSettings(){
    this.router.navigate(['/account-settings'], {replaceUrl:true});
  }

  redirectToAjoutOrdonnance(){
    this.router.navigate(['/ajout-ordonnance'], {replaceUrl:true});
  }
  
  RedirectToVerifMed(){
    this.router.navigate(['/verif-med'], {replaceUrl:true});
  }

  redirectToHistoriqueOrdonnance(){
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
  redirectToHistorique(){
    this.router.navigate(['/historique'], {replaceUrl:true});
  }
  
  selectedOption: string='';
  contractant: any[] = [];
  ngOnInit(): void {
    this.getContractants();
  }
  getContractants() {
    this.contractantService.getContractants().subscribe(
      (response) => {
        this.contractant = response; 
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }

   //code mtaa tokhbiyet les données 
   showData: boolean = false;
  

   toggleDataVisibility() {
     this.showData = !this.showData;
   }
}
