import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DailyboardComponent } from './dailyboard/dailyboard.component';
import { LeaderboardService } from './leaderboard/leaderboard.service';
import { PlayerDetailsComponent } from './dailyboard/player-details/player-details.component';
import { PlayerScoreComponent } from './dailyboard/player-score/player-score.component';
import { LeaderboardTableComponent } from './leaderboard/leaderboard-table/leaderboard-table.component';

@NgModule({
  providers: [LeaderboardService],
  declarations: [
    HomeComponent,
    LeaderboardComponent,
    DailyboardComponent,
    PlayerDetailsComponent,
    PlayerScoreComponent,
    LeaderboardTableComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
