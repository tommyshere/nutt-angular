import { Component, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { DailyboardService } from './dailyboard.service';
import { PlayerDetail } from '../../../interface';

@Component({
  selector: 'app-dailyboard',
  templateUrl: './dailyboard.component.html',
  styleUrls: ['./dailyboard.component.scss'],
})
export class DailyboardComponent implements OnInit {
  private _rx!: Subscription;
  public myData!: PlayerDetail;
  public otherPlayerDetails!: PlayerDetail[];

  constructor(private dbService: DailyboardService) {}

  ngOnInit(): void {
    this._rx = zip(
      this.dbService.getMyDailyScore(),
      this.dbService.getOtherPlayerDetails()
    ).subscribe(data => {
      console.log(data);
      this.myData = data[0];
      this.otherPlayerDetails = data[1];
    });
  }
}
