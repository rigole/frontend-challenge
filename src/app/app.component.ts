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

})
export class AppComponent {
  title = 'frontend-challenge';




}
