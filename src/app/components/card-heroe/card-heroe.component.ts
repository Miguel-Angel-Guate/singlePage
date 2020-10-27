import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css'],
})
export class CardHeroeComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeChoosed: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeChoosed = new EventEmitter();
  }

  ngOnInit(): void {}
  viewHeroe() {
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroeChoosed.emit(this.index);
  }
}
