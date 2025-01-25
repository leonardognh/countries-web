import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private httpCliente = inject(HttpClient);

  getAll(): Observable<Country[]> {
    return this.httpCliente.get<Country[]>(
      'https://restcountries.com/v3.1/all'
    );
  }
}
