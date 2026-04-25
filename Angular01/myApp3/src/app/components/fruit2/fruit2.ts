import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-fruit2',
  imports: [],
  templateUrl: './fruit2.html',
  styleUrl: './fruit2.css',
})
export class Fruit2 {
  fruitName = signal('');
  fruits = signal<string[]>([]);

  addFruit() {
    const value = this.fruitName().trim();

    if (value) {
      this.fruits.update(list => [...list, value]);
      this.fruitName.set('');
    }
  }
}
