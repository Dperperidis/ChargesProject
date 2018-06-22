import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ChargesDetailsComponent } from './charges-details/charges-details.component';
import { ChargesListComponent } from './charges-list/charges-list.component';
import { ChargesService } from './charges.service';

const routes: Route[] = [
  { path: 'charge/list', component: ChargesListComponent },
  { path: 'charge/:id', component: ChargesDetailsComponent },
  { path: 'charge/new', component: ChargesDetailsComponent }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ChargesDetailsComponent,
    ChargesListComponent
  ],
  providers: [
    ChargesService
  ]
})
export class ChargesModule { }
