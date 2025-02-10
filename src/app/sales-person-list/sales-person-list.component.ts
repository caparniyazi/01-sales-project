import {Component} from '@angular/core';
import {SalesPerson} from './sales-person';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  imports: [
    NgForOf,
    NgIf,
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './sales-person-list.component.html',
  standalone: true,
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  // Create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Niyazi", "Çapar", "capar.niyazi.tr@gmail.com", 50000),
    new SalesPerson("Hasan", "Çapar", "capar.hasan.tr@gmail.com", 40000),
    new SalesPerson("Mustafa", "Çapar", "capar.mustafa.tr@gmail.com", 90000),
    new SalesPerson("Ahmet", "Aktaş", "aktas.ahmet.tr@gmail.com", 60000)
  ]
}
