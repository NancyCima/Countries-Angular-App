import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  country!: Country;

  constructor(private route: ActivatedRoute, private countriService: CountriService) {}

  getCurrencies(currencies: { [key: string]: { name: string, symbol: string } }) {
    return Object.values(currencies);
  }
  
  getLanguages(languages: { [key: string]: string }) {
    return Object.values(languages);
  }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.countriService.getForMoreInfo(name).subscribe((countries: Country[]) => {
        if (countries.length > 0) {
          this.country = countries[0];
        }
      });
    }
  }
}