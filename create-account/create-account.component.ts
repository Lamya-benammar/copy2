import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccountModule } from '../models/create-account.module';
import { CreateAccountService } from '../services/create-account.service';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  pharmacien: CreateAccountModule = new CreateAccountModule();

  // submited = false;
  //  isSuccessful=false;
  //  detailUser: FormGroup = new FormGroup({
  //   nom: new FormControl(''),
  //   prenom: new FormControl(''),
  //   matricule_fiscale: new FormControl(''),
  //   password: new FormControl(''),
  //   email: new FormControl(''),
  //   telephone:new FormControl(''),
  //   portable:new FormControl(''),
  //   matricule_cnam:new FormControl(''),
  //   idb:new FormControl(''),
  //   adresse:new FormControl(''),
  // });

  constructor(private router: Router, private createAccountService: CreateAccountService, private httpClient: HttpClient, private toastr: ToastrService, private formBuilder: FormBuilder) { }
  
  redirectToInscription() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  ngOnInit(): void {}

  
  // ngOnInit(): void {
  //   this.detailUser = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(7)]],
  //     nom: ['', [Validators.required, Validators.minLength(3)]],
  //     prenom: ['', [Validators.required, Validators.minLength(4)]],
  //     matricule_fiscale: ['', [Validators.required, Validators.minLength(5)]],
  //     telephone:['', [Validators.required]],
  //     portable:['', [Validators.required]],
  //     matricule_cnam:['', [Validators.required]],
  //     idb:['', [Validators.required]],
  //     adresse:['', [Validators.required]],
  //   });
  // }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.detailUser.controls;
  // }

  createPharmacien(){
    this.createAccountService.createPharmacien(this.pharmacien).subscribe( data =>{
      this.pharmacien=data
    },
    error => console.log(error));
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.pharmacien);
    this.createPharmacien();
    
    this.toastr.success('Inscription réussie avec succès! Veuillez connecter.');
    
    this.goToLogin();
  }
/*
  signup(){
    this.submited=true
    this.pharmacien.nom=this.detailUser.value.nom
    this.pharmacien.prenom=this.detailUser.value.prenom
    this.pharmacien.matricule_fiscale=this.detailUser.value.matricule_fiscale
    this.pharmacien.password=this.detailUser.value.password
    this.pharmacien.email=this.detailUser.value.email
    this.pharmacien.telephone=this.detailUser.value.telephone
    this.pharmacien.portable=this.detailUser.value.portable
    this.pharmacien.matricule_cnam=this.detailUser.value.matricule_cnam
    this.pharmacien.idb=this.detailUser.value.idb
    this.pharmacien.adresse=this.detailUser.value.adresse

   
    if (this.detailUser.invalid) {
      return;
    }
    

    this.createAccountService.createPharmacien(this.pharmacien).subscribe(res=>{
        this.isSuccessful=true
  
          this.router.navigate(['/login']);
        
    },err=>{

     console.log("erreur")
    })
  }
*/
}
