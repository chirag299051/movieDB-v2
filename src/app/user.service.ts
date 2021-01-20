import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import { BehaviorSubject } from 'rxjs';
import { User } from './components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private source = new BehaviorSubject(0);
  count = this.source.asObservable();
  private source2 = new BehaviorSubject<User>({}); 
  userData = this.source2.asObservable();
  private source3 = new BehaviorSubject<boolean>(false);
  auth = this.source3.asObservable();

  watchlist = [];

  constructor(private afAuth: AngularFireAuth, public _snackBar: MatSnackBar, private router: Router) { }

  user = <User>{};

  public openSnackBar() {
    this._snackBar.open(`Hello ${this.user.name}, Welcome to the Movie Database v2!`, 'Close', {
      duration: 15000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar']
    });
  }

  async  login(){
    await  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.afAuth.authState.subscribe(x => {
      console.log(x);
      this.user.name = x.displayName.split(' ')[0];
      this.user.uid = x.uid;
      this.user.email = x.email;
      this.user.photoURL = x.photoURL;
      this.user.displayName = x.displayName;
      console.log(this.user);
      this.sendAuth(true); 
      this.sendUser(this.user); 
      this.openSnackBar();
    })
  }

  async logout() {
    await this.afAuth.signOut();
    // this.authenticated = false;
    this.sendAuth(false);
  }

  sendUser(value) {
    this.source2.next(value);
  }

  sendCount(value) {
    this.source.next(value);
  }

  sendAuth(value) {
    this.source3.next(value);
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
