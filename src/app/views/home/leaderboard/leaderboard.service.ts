import {of, Observable, map} from 'rxjs';
import { leaderboard } from './leaderboard-data';
import {OverallIndScore} from '../../../interface';

export class LeaderboardService {

  constructor() { }

  public getLeaderboard(): Observable<OverallIndScore[]> {
    return of(leaderboard).pipe(
        map(data => data.sort((a, b) => a.overallScore - b.overallScore))
    )
  }
}
