import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RouteService } from 'src/app/route.service';
import { TmdbService } from 'src/app/services/tmdb.service';
import { UserService } from 'src/app/user.service';
import { User } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  openMenu() {
    console.log('Enter')
    this.trigger.openMenu();
  }
  closeMenu() {
    console.log('Leave')
    this.trigger.closeMenu();
  }

  constructor(private tmdb: TmdbService, public user: UserService, private router: Router, private route: ActivatedRoute, 
    private routeService: RouteService) { }

  value;
  options = [];
  _options = [];
  listCount;
  param;
  userData;


  ngOnInit() {
    this.user.count.subscribe(x => this.listCount = x);
    this.routeService.param.subscribe(x => this.param = x);
    this.user.userData.subscribe(data => this.userData = data);
  }

  search(e) {
    this.options = [];
    this._options = [];
    console.log(e)
    this.tmdb.getList(e).subscribe(data => {
      console.log('DATA:',data);
      this.options = data['results']
        .map(x => {this._options.push({type: x['media_type'],id: x['id'], name: x['title']?x['title']:x['name'], rating: x['vote_average'], year: x['release_date']?x['release_date']:x['first_air_date']})
          return this._options});
        this._options = this._options.filter((item) => {
          for (var key in item) {
            if (item[key] === undefined || item[key] === 0)
              return false;
          }
          return true;
        });
        // x => x['rating']!==0 || x['rating']!==undefined || x['year']!==undefined)
        this._options = this._options.sort((a,b) => b['rating'] - a['rating']);
        
        
        console.log('OPTIONS:',this._options);
        
        // Auto Complete
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
        startWith(''),
        map(value => value.length >= 3 ? value: [])
      );

        console.log('F.O. ',this.filteredOptions)
    });
  }

  enter(type, id) {
    console.log(type, id);
    this.router.navigate(['/content', type, id ]);
  }

// Auto Complete
  myControl = new FormControl();
  filteredOptions: Observable<string[]> 

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option['title'].toLowerCase().includes(filterValue));
  // }
}
