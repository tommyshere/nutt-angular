import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OverallIndScore } from '../../../interface';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  public leaderboard!: OverallIndScore[];
  public displayedColumns: string[] = [
    'name',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'overall',
  ];
  private _rx!: Subscription;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this._rx = this.leaderboardService.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
    });
  }
}
