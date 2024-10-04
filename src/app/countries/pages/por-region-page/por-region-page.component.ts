import { Component } from '@angular/core';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-por-region-page',
  templateUrl: './por-region-page.component.html',
  styles: ``
})
export class PorRegionPageComponent {
  countries:Country[]=[]

  constructor(public countrisServices:CountriService){}

  searchByregion(term: string): void {
    this.countrisServices.getCountriesByRegion(term).subscribe((countries: Country[]) => {
      this.countries = countries.filter((country: Country) => 
        country.region.toLowerCase().startsWith(term.toLowerCase())
      );
    });
  }  
}

