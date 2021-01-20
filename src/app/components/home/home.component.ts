import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { List } from 'src/app/list.model';
import { TmdbService } from 'src/app/services/tmdb.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: TmdbService, private dialog: MatDialog, public user: UserService) { }

  inTheatres: List[];
  topRatedMovies: List[];
  topRatedTv: List[];
  popularTv: List[];
  
  ngOnInit() {
    this.getInTheatres();
    this.getTopRatedMovies();
    this.getTopRatedTv();
    this.getPopularTv();

    this.user.auth.subscribe(x => {
      console.log('AUTH :',x)
      x===false ? this.openDialog() : null
    });
  }

  getInTheatres() {
    this.service.getInTheatres().subscribe(data => {
      console.log(data);
      this.inTheatres = data['results'].map(x => {
        return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'movie', rating: x['vote_average'] }
      });
      this.inTheatres = this.inTheatres.sort((a,b) => b['rating'] - a['rating']);
      console.log(this.inTheatres);
    })
  }
  getTopRatedMovies() {
    this.service.getTopRatedMovies().subscribe(data => {
      console.log(data);
      this.topRatedMovies = data['results'].map(x => {
        return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'movie', rating: x['vote_average'] }
      });
      this.topRatedMovies = this.topRatedMovies.sort((a,b) => b['rating'] - a['rating']);
      console.log(this.topRatedMovies);
    })
  }
  getTopRatedTv() {
    this.service.getTopRatedTv().subscribe(data => {
      console.log(data);
      this.topRatedTv = data['results'].map(x => {
        return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'tv', rating: x['vote_average'] }
      });
      this.topRatedTv = this.topRatedTv.sort((a,b) => b['rating'] - a['rating']);
      console.log(this.topRatedTv);
    })
  }
  getPopularTv() {
    this.service.getPopularTv().subscribe(data => {
      console.log(data);
      this.popularTv = data['results'].map(x => {
        return { id: x['id'], name: x['title'], imgSrc: 'https://image.tmdb.org/t/p/w200'+x['poster_path'], type: 'tv', rating: x['vote_average'] }
      });
      this.popularTv = this.popularTv.sort((a,b) => b['rating'] - a['rating']);
      console.log(this.popularTv);
    })
  }



  // Login Modal/Dialog
  openDialog() {
    const dialogRef = this.dialog.open(Dialog, {
      height: '500px',
      width: '400px',
      hasBackdrop: true,
      backdropClass: '',
      panelClass: 'dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css']
})
export class Dialog {

  constructor(private user: UserService) {}

  login() {
    this.user.login();
  }

}

export interface User {
  name?: string;
  uid?: string;
  email?: string;
  photoURL?: string;
  displayName?: string;
}



