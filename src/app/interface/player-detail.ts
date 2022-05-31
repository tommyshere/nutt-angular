import { PlayerScore } from './player-score';

export interface PlayerDetail {
  name: string;
  todayScore: number;
  overallScore: number;
  playDetails: PlayerScore[];
}
