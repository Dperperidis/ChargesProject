import { Component, OnInit } from '@angular/core';

import { ChargesService } from '../charges.service';
import { Charge } from '../../app.model';

@Component({
  selector: 'app-charges-list',
  templateUrl: './charges-list.component.html',
  styleUrls: ['./charges-list.component.css']
})
export class ChargesListComponent implements OnInit {
  Charges = new Array<Charge>();



  constructor(
    private chargesService: ChargesService
  ) { }


  ngOnInit() {
    this.getCharges();
  }

  getCharges() {
    this.chargesService.getCharges().subscribe(res => {
      this.Charges = res;
    });
  }

  delete() {
    this.chargesService.deleteCharge().subscribe(res => {
      console.log(res);
    });
  }

}
