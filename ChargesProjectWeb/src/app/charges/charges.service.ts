import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Charge } from '../app.model';

@Injectable()

export class ChargesService {

  private chargeUrl = environment.api + '/charge';


  constructor(
    private http: HttpClient
  ) { }

  insertCharge (charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(`${this.chargeUrl}`, charge);
  }

  getCustomers(): Observable<Array<Charge>> {
    return this.http.get<Array<Charge>>(`${this.chargeUrl}/all`);

  }
}
