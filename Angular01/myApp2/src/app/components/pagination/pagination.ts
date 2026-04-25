import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  @Input() max = 1;
  @Output() onPageChange = new EventEmitter<number>();
  currentPage = 1;
  numbers: number[] = [];

  ngOnInit() {
    for(let i = 1; i <= this.max; i++) {
      this.numbers.push(i);
    }
  }

  emitPageEvent() {
    this.onPageChange.emit(this.currentPage);

}
}