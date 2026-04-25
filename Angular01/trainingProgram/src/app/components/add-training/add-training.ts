import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TrainingService } from '../../services/training';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-training',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-training.html',
  styleUrl: './add-training.css',
})
export class AddTraining {
  training = {
    title: '',
    topic: '',
    maxTrainee: 0,
    startDate: '',
    endDate: '',
    trainerName: '',
    venue: ''
  };

  constructor(
    private trainingService: TrainingService,
    public auth: AuthService
  ){}

  addTraining(form: any){
    if (form.valid){
      this.trainingService.addTraining({ ...this.training });
      alert('Training Added');
      form.reset();
    }
  }
}
