import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private source = new BehaviorSubject(0);
  count = this.source.asObservable();

  watchlist = [];

  constructor() { }

  sendCount(value) {
    this.source.next(value);
  }

  addToList(data: any[]) {
    this.watchlist.push(data);
    localStorage.setItem('list', JSON.stringify(this.watchlist));
    this.sendCount(this.watchlist.length);
    console.log(this.watchlist);
  }

  getWatchlist() {
    return JSON.parse(localStorage.getItem('list'));
    this.sendCount(this.watchlist.length);
  }

  clearList() {
    localStorage.clear();
    this.watchlist = [];
    this.sendCount(this.watchlist.length);
  }
}
