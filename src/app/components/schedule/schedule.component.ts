import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';
import { User, RSVPStatus } from '../../models/User';
import { FeedbackService } from '../../services/FeedbackService';
import { ScheduleFeedback } from '../../models/ScheduleFeedback';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) {
    this.feedbackService.getAllScheduleFeedback().subscribe(x => {
      this.feedback = x;
      this.compileTotals();
    });
  }

  totalFridayEvening: number = 0;
  totalSaturdayDaytime: number = 0;
  totalSaturdayEvening: number = 0;
  totalSundayMorning: number = 0;

  allComments: Array<ScheduleFeedback> = [];

  private feedback: Array<ScheduleFeedback>;
  ngOnInit() {
  }

  getBooleanClass(value: boolean){
    return value? "large green check icon" : "large red x icon";
  }

  compileTotals(){
    this.feedback.forEach(x => {
      if(x.fridayEvening) this.totalFridayEvening++;
      if(x.saturdayDaytime) this.totalSaturdayDaytime++;
      if(x.saturdayEvening) this.totalSaturdayEvening++;
      if(x.sundayMorning) this.totalSundayMorning++;
      var realComments = x.commentHistory.filter(x => x.trim().length > 0);
      //console.log(x, x.commentHistory.length, realComments.length);
      this.allComments.push(new ScheduleFeedback(x.email, realComments));
    });
    console.log(this.allComments);
  }

}
