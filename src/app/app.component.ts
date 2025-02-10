import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SalesPersonListComponent} from './sales-person-list/sales-person-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SalesPersonListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-sales-project';
}
