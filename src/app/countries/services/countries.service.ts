import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private https: HttpClient) { }

  searchCountryByAlphaCode(term: string) : Observable<Country | null> {
    const endpoint = 'alpha';

    return this.https.get<Country[]>(`${this.apiUrl}/${endpoint}/${term}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {

    const endpoint = 'capital'

    return this.https.get<Country[]>(`${this.apiUrl}/${endpoint}/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry( term : string) {

    const endpoint = 'name'

    return this.https.get<Country[]>(`${this.apiUrl}/${endpoint}/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion( term: string ) {
    const endpoint = 'region';

    return this.https.get<Country[]>(`${this.apiUrl}/${endpoint}/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }
}
