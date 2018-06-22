import { Component, OnInit } from '@angular/core';

import { ChargesService } from '../charges.service';
import { Charge } from '../../app.model';

@Component({
  selector: 'app-charges-list',
  templateUrl: './charges-list.component.html',
  styleUrls: ['./charges-list.component.css']
})
export class ChargesListComponent implements OnInit {
  charges = new Array<Charge>();

  constructor(
    private chargesService: ChargesService
  ) { }


  ngOnInit() {
    this.getCharges();
  }

  getCharges() {
    this.chargesService.getCharges().subscribe(res => {
      this.charges = res;
    });
  }

  delete(id: string) {
    const i = this.charges.findIndex(x => x.id === id);
    this.chargesService.deleteCharge(id).subscribe(res => {
      if (res) {
        this.charges.splice(i, 1);
      }
    }, error => {
      window.alert(error.error);
    });
  }

}
