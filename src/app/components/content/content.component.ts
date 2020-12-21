
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/content.model';
import { TmdbService } from 'src/app/services/tmdb.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('div', { static: true }) div: ElementRef;
  @ViewChild('r', { static: true }) r: ElementRef;

  constructor(private route: ActivatedRoute, private service: TmdbService, private user: UserService) {
    
   }

  id;
  type;
  movieContent;
  tvContent;
  similar;
  reviews: {}[];
  sub;
  data;
  showReviews = false;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.type = params['type'];
      if(this.type === 'movie') {
        this.getMovieContent(this.id);
      }
      if(this.type === 'tv') {
        this.getTvContent(this.id);
      }
      this.similar = this.getSimilar();
    })
    this.showReviews = false;
    
  }

  getMovieContent(id) {
    this.showReviews = false;
    this.service.getMovieContent(this.id).subscribe(data => {
      this.data = data;
      this.movieContent = 
      { imgURL: `url(https://image.tmdb.org/t/p/400${data["poster_path"]})`, 
        backdropURL: `url(https://image.tmdb.org/t/p/original${data["backdrop_path"]})`,
        name: data['title'],
        year: data['release_date'].substr(0,4),
        rating: data['vote_average'],
        plot: data['overview'],
        genre: data['genres'].map(x => x.name).join(' '),
        runtime: data['runtime']+ ' min',
        id: data['id']
      }
      this.div.nativeElement.style.backgroundImage = this.movieContent.backdropURL;
      // this.div.nativeElement.style.background = `linear-gradient(top bottom left right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), ${this.movieContent.backdropURL} no-repeat`;
      console.log('div ', this.div.nativeElement.style.background)
      console.log('Movie', this.movieContent, this.movieContent.backdropURL);
    })
  }

  getTvContent(id) {
    this.showReviews = false;
    this.service.getTvContent(this.id).subscribe(data => {
      this.data = data;
      this.tvContent = 
      { imgURL: `url(https://image.tmdb.org/t/p/400${data["poster_path"]})`, 
        backdropURL: `url(https://image.tmdb.org/t/p/original${data["backdrop_path"]})`,
        name: data['name'],
        year: data['first_air_date'].substr(0,4),
        rating: data['vote_average'],
        plot: data['overview'],
        genre: data['genres'].map(x => x.name).join(' '),
        runtime: data['episode_run_time']+ ' min',
        id: data['id']
      }
      this.div.nativeElement.style.backgroundImage = this.tvContent.backdropURL;
      console.log('TV', this.tvContent);
    })
  }

  addToWatchlist(data) {
    this.user.addToList(data);
  }

  getSimilar() {
    this.service.getSimilar(this.type, this.id).subscribe(data => {
      console.log(data);
      this.similar = data['results'].map(x => {
        return { id: x['id'], name: x['title']||x['name'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'movie', rating: x['vote_average'] }
      });
      this.similar = this.similar.sort((a,b) => b['rating'] - a['rating']);
      console.log(this.similar);
    })
  }

  getReviews() {
    this.showReviews = true;
    this.service.getReviews(this.type, this.id).subscribe(data => {
      console.log(data['results']);
      this.reviews = data['results'].map(x => {
        return { name: x['author'], content: x['content'], updated: x['updated_at'].substr(0,10), rating: x['author_details']['rating'], 
        avatar: x['author_details']['avatar_path'] }
      });
      console.log(this.reviews);
    })
    this.r.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.showReviews = false;
  }

}
