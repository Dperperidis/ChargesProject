import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChargesService } from '../charges.service';
import { Charge } from '../../app.model';

@Component({
  selector: 'app-charges-details',
  templateUrl: './charges-details.component.html',
  styleUrls: ['./charges-details.component.css']
})
export class ChargesDetailsComponent implements OnInit {
  charge = new Charge();
  text: string;

  constructor(
    private chargesService: ChargesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((param: Params) => {
      const id = param['id'];
      if (id === 'new') {
      } else {
        this.getCharge(id);
      }
    });
  }

  insertOrUpdate() {
    this.charge.id ? this.update() : this.insert();

  }
  update() {
    this.chargesService.updateCharge(this.charge).subscribe(res => {
      console.log(res);
      this.charge = new Charge();
      this.router.navigate(['/charge', 'list']);
    });
  }

  insert() {
    this.chargesService.insertCharge(this.charge).subscribe(res => {
      console.log(res);
      this.charge = new Charge();
    });
  }

  getCharge(id: string) {
    this.chargesService.getChargeById(id).subscribe(res => {
      this.charge = res;
    }, error => {

    });
  }
}
