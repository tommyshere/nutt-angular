import { Component, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { DailyboardService } from './dailyboard.service';
import { PlayerScore } from '../../../interface';

@Component({
  selector: 'app-dailyboard',
  templateUrl: './dailyboard.component.html',
  styleUrls: ['./dailyboard.component.scss'],
})
export class DailyboardComponent implements OnInit {
  private _rx!: Subscription;
  public myScore!: PlayerScore[];

  constructor(private dbService: DailyboardService) {}

  ngOnInit(): void {
    this._rx = zip(this.dbService.getMyDailyScore()).subscribe(data => {
      console.log(data);
      this.myScore = data[0];
    });
  }
}
