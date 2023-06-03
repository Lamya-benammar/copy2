import { Component, OnInit } from '@angular/core';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { ordonnance } from 'src/app/models/ordonnance.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { bordereau } from 'src/app/models/bordereau.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ordonnaces',
  templateUrl: './ordonnaces.component.html',
  styleUrls: ['./ordonnaces.component.scss']
})
export class OrdonnacesComponent implements OnInit {

  bordereau : bordereau = new bordereau();
  selectedItems: any[] = [];
  listData: any;
  

  constructor(private ordonnanceService : OrdonnanceService, private formBuilder: FormBuilder, private http: HttpClient) { 
    this.myForm = this.formBuilder.group({
      numFacture: [''],
      ref: [''],
      nbrPrestations: [''],
      montant: [''],
      statut : [''],
      date : ['']
    });
    this.ordonnanceService = ordonnanceService;
    this.listData = [];
  }
  validateForm(): boolean {
    const numFactureControl = this.myForm.get('numFacture');
    const refControl = this.myForm.get('ref');
    const nbrPrestationsControl = this.myForm.get('nbrPrestations');
    const montantControl = this.myForm.get('montant');
    const statutControl = this.myForm.get('statut');
    const dateControl = this.myForm.get('date');
  
    return (
      numFactureControl?.valid &&
      refControl?.valid &&
      nbrPrestationsControl?.valid &&
      montantControl?.valid &&
      statutControl?.valid &&
      dateControl?.valid 
    ) ?? false;
  }
  
  
  myForm: FormGroup;

  ngOnInit(): void {
    this.getData()
  }
  ListData: any[] = [];
  getData() {
    this.ordonnanceService.getData().subscribe(
      (response) => {
        this.ListData = response; 
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }


ListDataa: ordonnance[] = [];
  selectAll: boolean = false;

  // ...

  selectAllItems() {
    for (let item of this.ListDataa) {
      item.checked = this.selectAll;
    }
  }

  onItemChange(item: ordonnance) {
    if (!item.checked) {
      this.selectAll = false;
    } else {
      // Check if all items are checked
      // this.selectAll = this.ListDataa.every((item) => item.checked);
    }
  }

  deleteSelectedItems() {
    // Filter out the selected items from the ListData array
    this.ListData = this.ListData.filter(item => !item.checked);
  }
  
  onSubmit() {
    if (this.validateForm()) {
      const formData = new FormData();
      formData.append('numFacture', this.myForm.get('numFacture')?.value || '');
      formData.append('ref', '2023FACT02358');
      formData.append('nbrPrestations', '2');
      formData.append('montant', this.myForm.get('montant')?.value || '');
      formData.append('statut', 'incomplète');
      formData.append('date',  '08-05-2023');
  
      const bordereau: bordereau = {
        numFacture: this.myForm.get('numFacture')?.value || '',
        ref: '2023FACT023503',
        nbrPrestations: 2,
        montant: this.myForm.get('montant')?.value || '',
        statut: 'incomplète',
        date:  '08-05-2023'
      };

      this.ordonnanceService.addBordereau(bordereau).subscribe(
        (response) => {
          // Handle success response
          console.log('Form submitted successfully:', response);
          // Reset the form
          this.myForm.reset();
          close();
          this.listData.push(this.myForm.value);
          this.ListData = this.ListData.filter(item => !item.checked);
          
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
    this.myForm.reset();
  }
  
  isnumFactureValid: boolean = false;
  isRefValid: boolean = false;
  isnbrPrestationsValid: boolean = false;
  ismontantValid: boolean = false;
  isstatutValid: boolean = false;
  isdateValid: boolean = false

  canSubmit(): boolean {
    return (
      this.isnumFactureValid &&
      this.isRefValid &&
      this.isnbrPrestationsValid &&
      this.ismontantValid &&
      this.isstatutValid &&
      this.isdateValid
    );
  }
  
   //code mtaa tokhbiyet les données 
   showData: boolean = false;
  

   toggleDataVisibility() {
     this.showData = !this.showData;
   }
}
