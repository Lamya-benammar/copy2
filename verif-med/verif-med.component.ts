import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicamentService } from '../services/medicament.service';
import { contractantService } from '../services/contractant.service';



@Component({
  selector: 'app-verif-med',
  templateUrl: './verif-med.component.html',
  styleUrls: ['./verif-med.component.scss']
})
export class VerifMedComponent implements OnInit {

  constructor(private router: Router,  private sugRecService: medicamentService, private contractantService: contractantService) { }

  selectedOption: string='';
  contractantName: string = '';


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
  ngOnInit(): void {
    this.getSugRecData()
    this.getContractants();
  }
  contractant: any[] = [];

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
  listData: any[] = [];
  getSugRecData() {
    this.sugRecService.getData().subscribe(
      (response) => {
        this.listData = response; 
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }

  searchTerm: string = '';

  //code mtaa tokhbiyet les données 
  showData: boolean = false;
  

  toggleDataVisibility() {
    this.showData = !this.showData;
  }
}
