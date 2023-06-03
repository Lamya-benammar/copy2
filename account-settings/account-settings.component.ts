import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/profileGestion/token-storage.service'; 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {


  myForm: FormGroup;

  detailMedecin:FormGroup=new FormGroup({

    email:new FormControl(this.tokenStorage.getUser().email),
    matricule_fiscale:new FormControl(this.tokenStorage.getUser().matricule_fiscale),
    nom:new FormControl(this.tokenStorage.getUser().nom),
    prenom:new FormControl(this.tokenStorage.getUser().prenom),
    telephone:new FormControl(this.tokenStorage.getUser().telephone),
    portable:new FormControl(this.tokenStorage.getUser().portable),
    adresse:new FormControl(this.tokenStorage.getUser().adresse),
    idb:new FormControl(this.tokenStorage.getUser().idb),
    matricule_cnam:new FormControl(this.tokenStorage.getUser().matricule_cnam),
    
  })
  email!:string
  matricule_fiscale!:string
  nom!:string
  prenom!:string
  discipline!:string
  telephone!:number
  portable!:number
  adresse!:string
  idb!:number
  matricule_cnam!:string

  constructor(private router: Router,private tokenStorage:TokenStorageService,private formBuilder:FormBuilder) {
    console.log(this.tokenStorage.getUser())
    this.email=this.tokenStorage.getUser().email
    this.matricule_fiscale=this.tokenStorage.getUser().matricule_fiscale
    this.nom=this.tokenStorage.getUser().nom
    this.prenom=this.tokenStorage.getUser().prenom
    this.discipline=this.tokenStorage.getUser().discipline
    this.telephone=this.tokenStorage.getUser().telephone
    this.portable=this.tokenStorage.getUser().portable
    this.adresse=this.tokenStorage.getUser().adresse
    this.idb=this.tokenStorage.getUser().idb
    this.matricule_cnam=this.tokenStorage.getUser().matricule_cnam

    this.myForm = this.formBuilder.group({
      nomprenom: [''],
      email: [''],
      adresse: [''],
      tel: [''],
      portable: [''],
      idc: [''],
      matricule: [''],
      idb: ['']
    });
   }

   

ngOnInit(): void {

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
  redirectToLamya(){
    this.router.navigate(['/test']);
  }
}
