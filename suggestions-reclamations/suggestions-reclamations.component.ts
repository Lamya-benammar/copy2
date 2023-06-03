import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sugrecService } from '../services/sugrec.service';
import { sugrec } from '../models/sugrec.module';

@Component({
  selector: 'app-suggestions-reclamations',
  templateUrl: './suggestions-reclamations.component.html',
  styleUrls: ['./suggestions-reclamations.component.scss']
})
export class SuggestionsReclamationsComponent implements OnInit {


  listData: any;
  
  sugrec: sugrec = new sugrec();


  constructor(private router: Router, private formBuilder: FormBuilder, private sugRecService: sugrecService ) {
    this.myForm = this.formBuilder.group({
      radioOption: [''],
      selectOption: [''],
      titre: [''],
      description: [''],
      file: ['']
    });
    this.sugRecService = sugRecService;
    this.listData = [];
   }

  myForm: FormGroup;
  
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
  redirectToGuide(){
    this.router.navigate(['/Guide'], {replaceUrl:true});
  }
  
  ngOnInit(): void {
    this.getSugRecData();
  }

  
  isFormValid: boolean = false;
  isNatureValid: boolean = false;
  isTypeValid: boolean = false;
  isTitreValid: boolean = false;
  isDescriptionValid: boolean = false;
  isFileValid: boolean = false;
  
  canSubmit(): boolean {
    return (
      this.isNatureValid &&
      this.isTypeValid &&
      this.isTitreValid &&
      this.isDescriptionValid &&
      this.isFileValid
    );
  }

  validateForm(): boolean {
    // Perform additional validation if needed
    // Check if the mandatory fields are filled
    return (
      !!this.sugrec.nature &&
      !!this.sugrec.type &&
      !!this.sugrec.titre &&
      !!this.sugrec.description &&
      !!this.sugrec.file
    );
    
  }
 
  onSubmit(){
    if (this.validateForm()) {
      const formData = new FormData();
      formData.append('radioOption', this.myForm.get('radioOption')?.value || '');
      formData.append('selectOption', this.myForm.get('selectOption')?.value || '');
      formData.append('titre', this.myForm.get('titre')?.value );
      formData.append('description', this.myForm.get('description')?.value || '');
      formData.append('file', this.myForm.get('file')?.value || '');
      this.sugRecService.submitForm(formData).subscribe(
        (response) => {
          // Handle success response
          console.log('Form submitted successfully:', response);
          // Reset the form
          this.myForm.reset();
          close();
          this.listData.push(this.myForm.value);
        },
        (error) => {
          // Handle error response
          console.error('Error submitting form:', error);
          this.myForm.reset();
          close();
          this.listData.push(this.myForm.value);
        }
      );
    } else {
      // Form validation failed
      console.log('Invalid form');
      this.myForm.reset();
    }
    console.log(this.sugrec);
    this.createSugRec();
    this.myForm.reset();
    window.location.reload()
  }

  /*
  signup(){
    this.submited=true
    this.pharmacien.nom=this.detailUser.value.nom
    this.pharmacien.prenom=this.detailUser.value.prenom
    this.pharmacien.matricule=this.detailUser.value.matricule
    this.pharmacien.password=this.detailUser.value.password
    this.pharmacien.email=this.detailUser.value.email
   
    if (this.detailUser.invalid) {
      return;
    }
    this.pharmacien.role="PHARMACIEN"
    //console.log(this.pharmacien)

    this.InscriService.createPharmacien(this.pharmacien).subscribe(res=>{
        this.isSuccessful=true
  
          this.router.navigate(['/login']);
        
    },err=>{

     console.log("erreur")
    })
  }
  */
  createSugRec(){
    this.sugRecService.addSugRec(this.sugrec).subscribe( data =>{
      this.sugrec=data
    },
    error => console.log(error));
  }

  getSugRecData() {
    this.sugRecService.getSugRecData().subscribe(
      (response) => {
        this.listData = response; 
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }
  
}
