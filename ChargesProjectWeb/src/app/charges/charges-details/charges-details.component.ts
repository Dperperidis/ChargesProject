import { Component, OnInit } from '@angular/core';

import { ChargesService } from '../charges.service';
import { Charge } from '../../app.model';
import { empty } from 'rxjs/Observer';
@Component({
  selector: 'app-charges-details',
  templateUrl: './charges-details.component.html',
  styleUrls: ['./charges-details.component.css']
})
export class ChargesDetailsComponent implements OnInit {
  charge = new Charge();


  constructor(
    private chargesService: ChargesService
  ) { }

  ngOnInit() {
    this.charge = new Charge();
  }

  insert() {
    this.chargesService.insertCharge(this.charge).subscribe(res => {
      console.log(res);
      this.charge = new Charge();
    });
  }
}
