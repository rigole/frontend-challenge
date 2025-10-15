import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Shipment} from './Shipment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl: string = 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';
  constructor(private http: HttpClient) {}

  public getShipments() {
    return this.http.get<Shipment[]>(`${this.baseUrl}`);
  }
}
