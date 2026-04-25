import { Component } from '@angular/core';
import { TrainingService } from '../../services/training';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-training',
  imports: [CommonModule],
  templateUrl: './view-training.html',
  styleUrl: './view-training.css',
})
export class ViewTraining {

  constructor(public trainingService : TrainingService){}
}
