import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { Heroes } from '../mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';

 
  // selectedHero?: Hero;
  heroes : Hero[]=[];

  // hero:Hero = {
  //   id: 1,
  //   name : 'Windstorm'
  // }


  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  

  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  //   this.msg.add(`HeroesComponent: Selected hero id =${hero.id}`);
  // }

  // getHeroes():void{
  //   this.heroes = this.heroservice.getHeroes();
  // }

  getHeroes():void{
    this.heroservice.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

}
