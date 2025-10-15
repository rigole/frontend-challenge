import { Component } from '@angular/core';
import {Shipment} from '../Shipment';
import {ServicesService} from '../services.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-shiplist',
  imports: [CommonModule],
  templateUrl: './shiplist.component.html',
  styleUrl: './shiplist.component.scss',
  providers: [ServicesService]
})
export class ShiplistComponent {

  constructor(private service: ServicesService) {}
  public shipList: Shipment[]= [];

  ngOnInit (): void{
    this.service.getShipments().subscribe(ship => {
      this.shipList = ship;
      this.shipList.sort((a, b) => a.name.localeCompare(b.name));
    })
  }

}
