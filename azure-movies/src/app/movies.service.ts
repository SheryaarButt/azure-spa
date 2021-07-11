import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return fetch('http://localhost:7071/api/GetMovies').then(movies => movies.json());
  }
}
