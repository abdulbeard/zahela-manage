import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(x => {
      this.users = x;
      this.flattenUsers();
      this.analyzeUsers();
    });
   }

   users: Array<User>;
   allergies: Map<string, number> = new Map<string, number>();
   diets: Map<string, number> = new Map<string, number>();
   religiousRestrictions: Map<string, number> = new Map<string, number>();

   freeformRestrictionsUsers: Array<User> = new Array<User>();

  ngOnInit() {
  }

  mapToArray(map: Map<string, number>) : Array<any>{
    var keys = Object.keys(map);
    var values = new Array<object>();
    keys.forEach(x => {
      values.push({
        key: x,
        value: map[x] 
      })
    });
    return values;
  }

  flattenUsers() {
    this.users.forEach(x => {
      if(x.linkedGuests){
        x.linkedGuests.forEach(y => {this.users.push(y)});
      }
    });
  }

  analyzeUsers() {
    this.users.forEach(x => {
      this.analyzeAllergies(x);
      this.analyzeDiets(x);
      this.analyzeReligiousRestrictions(x);
      this.analyzeFreeform(x);
    });
  }

  analyzeFreeform(user: User) {
    if(user.freeformAllergies || user.freeformRestrictions){
      this.freeformRestrictionsUsers.push(user);
    };
  }

  analyzeAllergies(user: User) {
    if(user.allergies){
      user.allergies.forEach(x => {
        var trimmed = x.trim();
        if(trimmed){
          if(this.allergies.has(trimmed)){
            this.allergies[trimmed]++;
          }
          else {
            this.allergies[trimmed] = 1;
          }
        }
      });
    }
  }

  analyzeDiets(user: User) {
    if(user.dietaryRestrictions){
      user.dietaryRestrictions.forEach(x => {
        var trimmed = x.trim();
        if(trimmed){
          if(this.diets.has(trimmed)){
            this.diets[trimmed]++;
          }
          else {
            this.diets[trimmed] = 1;
          }
        }
      });
    }
  }

  analyzeReligiousRestrictions(user: User) {
    if(user.religiousRestrictions){
      user.religiousRestrictions.forEach(x => {
        var trimmed = x.trim();
        if(trimmed){
          if(this.religiousRestrictions.has(trimmed)){
            this.religiousRestrictions[trimmed]++;
          }
          else {
            this.religiousRestrictions[trimmed] = 1;
          }
        }
      });
    }
  }

}
