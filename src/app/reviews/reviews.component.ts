import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews: {}[];
  // i = []
  // show = false;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    // this.i = this.reviews.map((obj, index)=> {
    //   // let newObj = {};
    //   obj['i'] = index;
    //   obj['showMore'] = false;
    // });
    // console.log('i : ', this.i);
  }

  ngOnDestroy() {
    
  }
    
  


  

}
