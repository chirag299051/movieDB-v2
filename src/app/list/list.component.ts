import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() heading: string;
  @Input() list: {id: string, imgSrc: string, name: string, type: string, rating: number}[];
  @Input() detail: boolean = false;
  @Output() onDeleteItem = new EventEmitter();
  hover;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadContent(id, type) {
    this.router.navigate([`/content/${type}/${id}`])
  }

}
