import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private https: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {

    const endpoint = 'capital'

    return this.https.get<Country[]>(`${this.apiUrl}/${endpoint}/${term}`);
  }
}
