import { Component, OnInit } from '@angular/core';
import { BordereauService } from 'src/app/services/bordereau.service';

@Component({
  selector: 'app-bordereau',
  templateUrl: './bordereau.component.html',
  styleUrls: ['./bordereau.component.scss']
})
export class BordereauComponent implements OnInit {

  constructor(private bordereauService : BordereauService) { }

  ngOnInit(): void {
    this.getData()
  }
  ListData: any[] = [];
  getData() {
    this.bordereauService.getData().subscribe(
      (response) => {
        this.ListData = response; 
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }
}
