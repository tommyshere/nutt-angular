import { PlayerScore } from './player-score';

export interface PlayerDetail {
  name: string;
  todayScore: string;
  overallScore: string;
  playDetails: PlayerScore[];
}
