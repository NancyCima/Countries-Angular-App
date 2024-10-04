import { Component } from '@angular/core';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-por-pais-page',
  templateUrl: './por-pais-page.component.html',
  styles: ``
})
export class PorPaisPageComponent {
  countries:Country[]=[]

  constructor(public countrisServices:CountriService){}

  searchBycountry(term: string): void {
    this.countrisServices.getCountryByName(term).subscribe((countries: Country[]) => {
      this.countries = countries.filter((country: Country) =>
        country.name.common.toLowerCase().startsWith(term.toLowerCase())
      );
    });
  }
}
