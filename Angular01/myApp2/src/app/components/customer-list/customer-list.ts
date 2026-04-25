import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CUSTOMER_DATA } from '../../data/customer-data';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  customers$ = of(CUSTOMER_DATA);

  search$ = new BehaviorSubject<string>('');
  currentPage$ = new BehaviorSubject<number>(1);

  pageSize = 2;

  searchControl = new FormControl('');

  paginatedCustomers$ = combineLatest([
    this.customers$,
    this.search$,
    this.currentPage$
  ]).pipe(
    map(([customers, search, page]) => {
      const filtered = customers.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );

      const start = (page - 1) * this.pageSize;
      return filtered.slice(start, start + this.pageSize);
    })
  );

  isPrevDisabled$ = this.currentPage$.pipe(
    map(page => page === 1)
  );

  isNextDisabled$ = combineLatest([
    this.customers$,
    this.search$,
    this.currentPage$
  ]).pipe(
    map(([customers, search, page]) => {
      const filtered = customers.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
      return page * this.pageSize >= filtered.length;
    })
  );

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.currentPage$.next(1);
        this.search$.next(value || '');
      });
  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    this.currentPage$.next(this.currentPage$.value - 1);
  }
}