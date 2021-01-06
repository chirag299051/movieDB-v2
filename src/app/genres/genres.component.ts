import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../route.service';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  constructor(private tmdb: TmdbService, private route: ActivatedRoute, private routeService: RouteService) { }

  param;

  ngOnInit() {
     this.route.params.subscribe(data => {
       console.log(data.type);
       this.param = data.type;
       this.routeService.sendParam(this.param);
     });

    for(const [index, obj] of this.genres.entries()) {
      this.tmdb.getGenreMovies(obj.id).subscribe(data => {
        this.genres[index]['movies'] = data['results'].map(x => {
          return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'movie', rating: x['vote_average'] }
        });
      })
      this.tmdb.getGenreTv(obj.id).subscribe(data => {
        this.genres[index]['tv'] = data['results'].map(x => {
          return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'tv', rating: x['vote_average'] }
        });
      })
    }
    console.log(this.genres);
  }

  ngOnChanges() {
    console.log(this.param.type)
  }

  genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
