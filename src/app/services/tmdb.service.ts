import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  key = '092e8cb2fdfe2fa5f210c9f2a932d024';
  searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${this.key}&language=en-US&query=`;
  movieURL = 'https://api.themoviedb.org/3/movie'
  tvURL = 'https://api.themoviedb.org/3/tv'


  getList(str) {
    return this.http.get(this.searchURL + str + '&page=1&include_adult=false');
  }

  getMovieContent(id) {
    return this.http.get(`${this.movieURL}/${id}?api_key=${this.key}&language=en-US`)
  }

  getTvContent(id) {
    return this.http.get(`${this.tvURL}/${id}?api_key=${this.key}&language=en-US`)
  }

  getInTheatres() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1')
  }
  getTopRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1')
  }
  getTopRatedTv() {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1')
  }
  getPopularTv() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1')
  }

  getSimilar(type, id) {
    return this.http.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1`)
  }

  getReviews(type, id) {
    return this.http.get(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&page=1`)
  }

  getGenreMovies(id) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&
    page=1&with_genres=${id}`)
  }

  getGenreTv(id) {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=092e8cb2fdfe2fa5f210c9f2a932d024&language=en-US&
    page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`)
  }

}
