import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';
import { User, RSVPStatus } from '../../models/User';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(x => {
      this.users = x;
      //this.sortByFirstName();
      this.compileNumberTotals(x);
    })
   }

  ngOnInit() {
  }

  users: Array<User>;
  defaultSortProperty: string = 'firstName';
  propertyToSort: string = this.defaultSortProperty;  
  ascending: boolean = false;
  descending: boolean = false;
  none: boolean = true;

  totalComing: number = 0;
  totalNotComing: number = 0;
  totalMaybe: number = 0;
  
  // firstNameChevronClass: string = '';
  // lastNameChevronClass: string = '';
  // usernameChevronClass: string = '';
  // emailChevronClass: string = '';
  // rsvpChevronClass: string = '';

  compileNumberTotals(users: Array<User>) {
    users.forEach(x => {
      if(x.linkedGuests){
        this.compileNumberTotals(x.linkedGuests);
      }
      if(x.rsvpStatus === RSVPStatus.coming){
        this.totalComing++;
      }
      if(x.rsvpStatus === RSVPStatus.notComing){
        this.totalNotComing++;
      }
      if(x.rsvpStatus === RSVPStatus.maybe){
        this.totalMaybe++;
      }
    })
  }

  getUserEmail(user: User): string {
    return user.email ? user.email.uri : '';
  }

  getRsvpClass(user: User): string {
    switch(user.rsvpStatus){
      case RSVPStatus.coming: {
        return 'large green check icon'
      }
      case RSVPStatus.notComing: {
        return 'large red x icon'
      }
      case RSVPStatus.maybe: {
        return 'large gray question icon'
      }
    }
  }

  getChevronClass(propertyName: string): string {
    if(this.none && propertyName === this.defaultSortProperty){
      return 'blue angle up icon';
    }
    if (this.propertyToSort === propertyName){
      return this.ascending ? 'blue angle up icon' : this.descending ? 'blue angle down icon' : '';
    }
    return '';
  }

  setSortParams(propertyName: string) {
    if(this.propertyToSort === propertyName){
      this.toggleSortMode();
    }
    else {
      this.propertyToSort = propertyName;
      this.ascending = true;
      this.descending = false;
      this.none = false;
    }
  }

  toggleSortMode() {
    if(this.ascending){
      this.ascending = false;
      this.descending = true;
      this.none = false;
    }
    else if(this.descending){
      this.ascending = false;
      this.descending = false;
      this.none = true;
    }
    else if(this.none){
      this.ascending = true;
      this.descending = false;
      this.none = false;
    }
  }

  sortByFirstName(){
    this.setSortParams('firstName');
    if(this.ascending || this.none){
      this.users.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))
    }
    else if (this.descending){
      this.users.sort((a,b) => (a.firstName > b.firstName) ? -1 : ((b.firstName > a.firstName) ? 1 : 0))
    }    
    // this.firstNameChevronClass = this.getChevronClass('firstName');
  }

  sortByLastName(){
    this.setSortParams('lastName')
    if(this.ascending){
      this.users.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0))
    }
    else if (this.descending){
      this.users.sort((a,b) => (a.lastName > b.lastName) ? -1 : ((b.lastName > a.lastName) ? 1 : 0))
    }
    if(this.none)this.sortByFirstName();
    // this.lastNameChevronClass = this.getChevronClass('lastName');
  }
  
  sortByEmail(){
    this.setSortParams('email')
    if(this.ascending){
      this.users.sort((a,b) => (a.email.uri > b.email.uri) ? 1 : ((b.email.uri > a.email.uri) ? -1 : 0))
    }
    else if (this.descending){
      this.users.sort((a,b) => (a.email.uri > b.email.uri) ? -1 : ((b.email.uri > a.email.uri) ? 1 : 0))
    }
    if(this.none)this.sortByFirstName();
    // this.emailChevronClass = this.getChevronClass('email');
  }

  sortByUserame(){
    this.setSortParams('username')
    if(this.ascending){
      this.users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
    }
    else if (this.descending){
      this.users.sort((a,b) => (a.username > b.username) ? -1 : ((b.username > a.username) ? 1 : 0))
    }
    if(this.none)this.sortByFirstName();
    // this.usernameChevronClass = this.getChevronClass('username');
  }
  
  sortByRsvpStatus(){
    this.setSortParams('rsvpStatus')
    if(this.ascending){
      this.users.sort((a,b) => (a.rsvpStatus > b.rsvpStatus) ? 1 : ((b.rsvpStatus > a.rsvpStatus) ? -1 : 0))
    }
    else if (this.descending){
      this.users.sort((a,b) => (a.rsvpStatus > b.rsvpStatus) ? -1 : ((b.rsvpStatus > a.rsvpStatus) ? 1 : 0))
    }
    if(this.none)this.sortByFirstName();
    // this.rsvpChevronClass = this.getChevronClass('rsvpStatus');
  }

  // sort(obj1:User, obj2:User, that: any): number {
  //   if(that.ascending){
  //     return obj1[that.propertyToSort] - obj2[that.propertyToSort];
  //   }
  //   if(that.descending){
  //     return obj2[that.propertyToSort] - obj1[that.propertyToSort];
  //   }
  //   if(that.none){
  //     that.propertyToSort = that.defaultSortProperty;
  //     return obj1[that.propertyToSort] - obj2[that.propertyToSort];
  //   }    
  // }
}
