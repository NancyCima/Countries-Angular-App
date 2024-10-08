import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriService {
        private apiUrl: string = environment.apiUrl

        constructor(private http: HttpClient) {}

        getCountryByName(name: string): Observable<any> {
                return this.http.get<any>(`${this.apiUrl}/name/${name}`)
        }

        getCountryByCapital(capital: string): Observable<any> {
                return this.http.get<any>(`${this.apiUrl}/capital/${capital}`)
        }

        getCountriesByRegion(region: string): Observable<any> {
                return this.http.get<any>(`${this.apiUrl}/region/${region}`);
        }

        getForMoreInfo(name: string): Observable<Country[]> {
                return this.http.get<Country[]>(`${this.apiUrl}${name}`);
              }
}