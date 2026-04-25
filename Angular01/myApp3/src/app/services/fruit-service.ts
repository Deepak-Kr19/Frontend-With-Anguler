import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FruitService {

  fruits: string[] = [];
  
  // httpClient: inject('HttpClient');

  getFruits(): string[] {
    return this.fruits;
  }

  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }

  // setFruits(fruits: string[]) {
  //   this.fruits = [...fruits];
  // }
}
