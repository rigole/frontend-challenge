import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServicesService} from './services.service';
import {Shipment} from './Shipment';
import { ShiplistComponent } from './shiplist/shiplist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShiplistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ServicesService]
})
export class AppComponent {
  title = 'frontend-challenge';
  public shipList: Shipment[]= [];

  constructor(private service: ServicesService) {}

  ngOnInit (): void{
    this.service.getShipments().subscribe(ship => {
      this.shipList = ship;
    })
  }

}
