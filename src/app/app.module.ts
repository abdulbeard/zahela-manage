import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Routes as AppRoutes } from './Routes';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserService } from './services/UserService';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FeedbackService } from './services/FeedbackService';
import { PlaylistService } from './services/PlaylistService';
import { PlaylistComponent } from './components/playlist/playlist.component';


const appRoutes: Routes = [
  { path: AppRoutes.home, component: HomeComponent },
  { path: AppRoutes.summary, component: SummaryComponent },
  { path: AppRoutes.rsvp, component: RsvpComponent },
  { path: AppRoutes.food, component: FoodComponent },
  { path: AppRoutes.schedule, component: ScheduleComponent },
  { path: AppRoutes.playlist, component: PlaylistComponent },
  { path: AppRoutes.empty, redirectTo: AppRoutes.home, pathMatch: "full" }, //base url, no path
  { path: AppRoutes.wildCard, redirectTo: AppRoutes.home }, //wrong url/404
];

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    HomeComponent,
    FoodComponent,
    SummaryComponent,
    ScheduleComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [UserService, FeedbackService, PlaylistService],
  bootstrap: [AppComponent]
})

export class AppModule { }
