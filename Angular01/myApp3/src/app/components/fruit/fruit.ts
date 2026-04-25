import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitService } from '../../services/fruit-service';

@Component({
  selector: 'app-fruit',
  imports: [FormsModule],
  templateUrl: './fruit.html',
  styleUrl: './fruit.css',
})

export class Fruit {
  fruitName: string = '';
  // fruits: string[] = [];

  constructor(public fruitService: FruitService) {}

  addFruit() {
    if (this.fruitName) {
      this.fruitService.addFruit(this.fruitName);
      this.fruitName = '';
    }
  }
}

