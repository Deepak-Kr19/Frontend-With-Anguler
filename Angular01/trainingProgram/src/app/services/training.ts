import { Injectable, signal } from '@angular/core';

export interface Training{
  title: string;
  topic: string;
  maxTrainee: number;
  startDate: string;
  endDate: string;
  trainerName: string;
  venue: string;

}

@Injectable({
  providedIn: 'root',
})
export class TrainingService {

  trainings = signal<Training[]>([]);

  addTraining(training : Training){
    this.trainings.set([...this.trainings(), training]);

  }

  getTrainings(){
    return this.trainings();
  }
}
