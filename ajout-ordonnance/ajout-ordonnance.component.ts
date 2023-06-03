import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { contractantService } from '../services/contractant.service'; 
import { adherent } from '../models/adherent.module';
import { adherenthistorique } from '../models/adherenthistorique.module';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.scss']
})
export class AjoutOrdonnanceComponent implements OnInit {

  contractant: any[] = [];
  selectedOption: string='';
  adherentHistory: any[]=[];  


  id: number =0;
  adherent: adherent = new adherent()
  searchError: boolean = true
  contractantName: string = '';

  history: adherenthistorique[] = [];

  constructor(private router: Router, private http: HttpClient, private contractantService: contractantService) {

  }
  
  ngOnInit(): void {
    this.getContractants();
  }

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
  
  serchAdherent() {
    forkJoin({
      adherentData: this.contractantService.getAdherent(this.id),
      historyData: this.contractantService.getAdherentHistory()
    }).subscribe(
      (response) => {
        this.adherent = response.adherentData;
        this.history = response.historyData;
        this.searchError = false;
      },
      (error) => {
        console.error('Error searching adherent:', error);
        this.searchError = true;
      }
    );
    
  }

  // searchAdherent() {
  //   this.contractantService.getAdherent(this.id).subscribe(
  //     (response) => {
  //       this.adherent = response;
  //       this.searchError = false;
  //     },
  //     (error) => {
  //       console.error('Error searching adherent:', error);
        
  //       this.searchError = true;
  //     }
  //   );
  // }
  // searchAdherent() {
  //   this.contractantService.getAdherentsByContractant(this.contractantName).subscribe(
  //     (response) => {
  //       this.searchError = false;
  //     },
  //     (error) => {
  //       console.error('Error searching adherent:', error);
        
  //       this.searchError = true;
  //     }
  //   );
  // }
  

}
