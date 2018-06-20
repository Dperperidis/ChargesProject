import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { environment } from '../../environments/environment';
import { Charge } from '../app.model';

@Injectable()

export class ChargesService {

  private chargeUrl = environment.api + 'charge';


  constructor(
    private http: HttpClient
  ) { }

  insertCharge(charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(`${this.chargeUrl}/new`, charge);
  }

  getCharges(): Observable<Array<Charge>> {
    return this.http.get<Array<Charge>>(`${this.chargeUrl}/details`);

  }

  deleteCharge(id: string): Observable<Charge> {
    return this.http.post<Charge>(`${this.chargeUrl}/delete/${id}`, {});
  }
}
