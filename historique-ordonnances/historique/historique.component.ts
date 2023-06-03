import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historiqueService } from 'src/app/services/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  constructor(private router: Router, private historiqueService : historiqueService) { }

  

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

  ngOnInit(): void {
    this.getHistoriqueData();
  }
  contractant: any[] = [];
  getHistoriqueData() {
    this.historiqueService.getData().subscribe(
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
