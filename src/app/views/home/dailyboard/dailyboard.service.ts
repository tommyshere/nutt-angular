import { Injectable } from '@angular/core';
import { PlayerDetail, PlayerScore } from '../../../interface';
import { Observable, of } from 'rxjs';
import { userGuess } from './my-data';
import { otherPlayerData } from './other-player-data';

@Injectable()
export class DailyboardService {
  constructor() {}

  public getMyDailyScore(): Observable<PlayerScore[]> {
    return of(userGuess);
  }

  public getOtherPlayerDetails(): Observable<PlayerDetail[]> {
    return of(otherPlayerData);
  }
}
