import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  private source = new BehaviorSubject('');
  param = this.source.asObservable()

  sendParam(value) {
    this.source.next(value);
  }
}
