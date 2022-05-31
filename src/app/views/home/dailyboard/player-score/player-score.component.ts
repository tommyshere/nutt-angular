import { Component, Input, OnInit } from '@angular/core';
import { PlayerScore } from '../../../../interface';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
  @Input() myScore!: PlayerScore[];
  public displayedColumns: string[] = [
    'golferName',
    'golferScore',
    'playerGuess',
    'playerScore',
  ];

  constructor() {}

  ngOnInit(): void {}
}
