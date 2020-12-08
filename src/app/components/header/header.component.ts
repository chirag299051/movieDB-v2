import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TmdbService } from 'src/app/services/tmdb.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tmdb: TmdbService, private user: UserService, private router: Router) { }

  value;
  options = [];
  _options = [];
  listCount;

  ngOnInit() {
    this.user.count.subscribe(x => this.listCount = x);
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
