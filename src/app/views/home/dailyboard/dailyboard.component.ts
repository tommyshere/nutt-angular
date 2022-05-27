import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dailyboard',
  templateUrl: './dailyboard.component.html',
  styleUrls: ['./dailyboard.component.scss'],
})
export class DailyboardComponent implements OnInit {
  @Input() day = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.day);
  }
}
