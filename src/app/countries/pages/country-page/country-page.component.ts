import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnInit {
  country!: Country;

  constructor(private route: ActivatedRoute, private countriService: CountriService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.countriService.getCountryByName(name).subscribe((country: Country) => {
        this.country = country;
      });
    }
  }
}