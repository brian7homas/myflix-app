import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any = []
  constructor(
    public fetchApiData: FetchApiDataService,
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }
  
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response
      return this.movies
    })
  }

}
