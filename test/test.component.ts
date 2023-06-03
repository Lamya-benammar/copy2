import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  
  masterSelected: boolean;
  checkedList: any[];
  
  constructor( ) { 
    this.masterSelected = false;
    this.checkedList = [];
  }

  checklist = [
    {
      id: 1,
      nTransaction: '123',
      nBordereau: '456',
      contractant: 'John Doe',
      matriculeAssurance: '789',
      nomAssure: 'Jane Doe',
      nomBeneficiaire: 'Bob Smith',
      qualiteBeneficiaire: 'Conjoint',
      dateTransaction: '2023-05-04',
      nConsultation: 'ABC',
      montantTicketModerateur: 50.0,
      resteAPayer: 100.0,
      status: 'Validé',
      isSelected: false
    },
    {
      id: 2,
      nTransaction: '456',
      nBordereau: '789',
      contractant: 'Alice Smith',
      matriculeAssurance: '123',
      nomAssure: 'Bob Johnson',
      nomBeneficiaire: 'Mary Johnson',
      qualiteBeneficiaire: 'Conjoint',
      dateTransaction: '2023-05-05',
      nConsultation: 'DEF',
      montantTicketModerateur: 75.0,
      resteAPayer: 150.0,
      status: 'En attente',
      isSelected: false
    },
  ]
  ngOnInit(): void {
  
  }


  checkUncheckAll() {
    for (let i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every((item) => item.isSelected);
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = this.checklist.filter((item) => item.isSelected);
    const checkedListString = JSON.stringify(this.checkedList);
  }

}