export class ScheduleFeedback {
    constructor(email: string, commentHistory: string[]){
        this.email = email;
        this.commentHistory = commentHistory;
    }
    fridayEvening: boolean;
    saturdayDaytime: boolean;
    saturdayEvening: boolean;
    sundayMorning: boolean;
    commentHistory: string[];
    userId: string;
    username: string;
    email: string;
    data?: any;
}