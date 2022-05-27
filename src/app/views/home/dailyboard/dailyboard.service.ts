import { Injectable } from '@angular/core';
import { PlayerScore } from '../../../interface';
import { Observable, of } from 'rxjs';
import { userGuess } from './my-data';

@Injectable()
export class DailyboardService {
  constructor() {}

  public getMyDailyScore(): Observable<PlayerScore[]> {
    return of(userGuess);
  }
}
