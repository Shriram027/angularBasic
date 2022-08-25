import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private messageService:MessageService,private http:HttpClient) { }

  // getHeroes():Hero[] {
  //   return Heroes;
  // }

  private log(message:string){
    this.messageService.add(`HeroService: ${message}`)
  }

  getHeroes():Observable<Hero[]>{
    const heroes = of(Heroes);
    this.messageService.add('HeroService:fetched Heroes');
    return heroes;
  }

  getHero(id:number):Observable<Hero>{
    const hero = Heroes.find(h=> h.id ===id)!;
    this.messageService.add(`HeroService : fetched hero id = ${id}`);
    return of(hero);
  }
}
