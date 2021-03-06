import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService, private router: Router) {
    // console.log('constructo');
  }

  ngOnInit(): void {
    // console.log('ngOnInit')
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  viewHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }
}
