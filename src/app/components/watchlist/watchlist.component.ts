import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private user: UserService) {
   }

   watchlist;

  ngOnInit() {
    this.watchlist = this.user.getWatchlist().map(x => {
      return { id: x['id'], name: x['title'] || x['name'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: (x['type']==="Scripted")? 'tv' : 'movie', rating: x['vote_average'] }
    });
    console.log(this.user.getWatchlist());
    console.log(this.watchlist)
  }

  clearList() {
    this.user.clearList();
    this.watchlist = [];
  }

  deleteItem(i) {
    
  }

}
