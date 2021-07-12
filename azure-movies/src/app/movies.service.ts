import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return fetch('api/GetMovies').then(movies => movies.json());
  }
}
