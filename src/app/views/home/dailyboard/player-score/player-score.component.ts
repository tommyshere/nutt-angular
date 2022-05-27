import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
  public displayedColumns: string[] = [
    'playerName',
    'playerScore',
    'guess',
    'score',
  ];
  constructor() {}

  ngOnInit(): void {}
}
