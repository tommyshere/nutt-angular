import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DailyboardComponent } from './dailyboard/dailyboard.component';
import { LeaderboardService } from './leaderboard/leaderboard.service';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@NgModule({
  providers: [LeaderboardService],
  declarations: [
    HomeComponent,
    LeaderboardComponent,
    DailyboardComponent,
    PlayerDetailsComponent,
  ],
  imports: [SharedModule],
})
export class HomeModule {}
