import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
})

export class AgeComponent implements OnInit, OnDestroy {
  age: number = 0;
  ageInterval!: Subscription;

  ngOnInit() {
    const birthday = dayjs("2000-05-27");

    this.ageInterval = interval(100).subscribe(() => {
      const currTime = dayjs();
      const age = currTime.diff(birthday, "year", true);
      this.age = age;
    });
  }

  ngOnDestroy() {
    if (this.ageInterval) {
      this.ageInterval.unsubscribe();
    }
  }
}
