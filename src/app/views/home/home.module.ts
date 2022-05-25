import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { DailyboardComponent } from './dailyboard/dailyboard.component';
import { LeaderboardService } from './leaderboard/leaderboard.service';



@NgModule({
  providers: [
    LeaderboardService
  ],
  declarations: [
    HomeComponent,
    LeaderboardComponent,
    DailyboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
