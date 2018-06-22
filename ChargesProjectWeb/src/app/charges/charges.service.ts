import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { Charge } from '../app.model';

@Injectable()

export class ChargesService {

  private chargeUrl = environment.api + 'charge';


  constructor(private http: HttpClient) {
  }

  insertCharge(charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(`${this.chargeUrl}/new`, charge);
  }

  getCharges(): Observable<Array<Charge>> {
    return this.http.get<Array<Charge>>(`${this.chargeUrl}/details`);

  }

  getChargeById(id: string): Observable<Charge> {
    return this.http.get<Charge>(`${this.chargeUrl}/${id}`)
      .catch((error: any) => Observable.throw(error || 'Server error'));

  }

  updateCharge(charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(`${this.chargeUrl}/update`, charge)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteCharge(id: string): Observable<any> {
    return this.http
      .post(this.chargeUrl + '/delete/' + id, {})
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }




}
