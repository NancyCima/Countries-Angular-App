import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-por-region-page',
  templateUrl: './por-region-page.component.html',
  styles: ``
})
export class PorRegionPageComponent {
  countries:Country[]=[]

  constructor(private router: Router, public countrisServices:CountriService){}

  searchByregion(term: string): void {
    this.countrisServices.getCountriesByRegion(term).subscribe((countries: Country[]) => {
      this.countries = countries.filter((country: Country) => 
        country.region.toLowerCase().startsWith(term.toLowerCase())
      );
    });
  }

  goToCountry(countryName: string): void {
    this.router.navigate(['/country', countryName]);
  }
}