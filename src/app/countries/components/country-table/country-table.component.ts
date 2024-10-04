import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `img {
    width: 25px;
  }`
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
  @Output() countryClicked = new EventEmitter<string>();

  onCountryClick(countryName: string): void {
    this.countryClicked.emit(countryName);
  }
}