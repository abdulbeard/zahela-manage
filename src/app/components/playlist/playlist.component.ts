import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/PlaylistService';
import { PlaylistEntry, ApprovalStatus } from 'src/app/models/PlaylistEntry';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public songs: Array<PlaylistEntry> = [];
  constructor(private playlistService: PlaylistService) {
    this.getAllEntries();
   }

  ngOnInit() {
  }

  getAllEntries(){
    this.playlistService.getAllEntries().subscribe(x => {
      console.log(x);
      this.songs = x.sort(PlaylistComponent.sort).reverse();
    });
  }

  getLabelClass(playlistEntry: PlaylistEntry){
    return `ui ${
      playlistEntry.approvalStatus === ApprovalStatus.None ? 'gray' : 
      playlistEntry.approvalStatus === ApprovalStatus.Approved ? 'green' : 'red'
    } horizontal label`;
  }

  getStatusText(approvalStatus: ApprovalStatus){
    switch(approvalStatus){
      case ApprovalStatus.Approved:{
        return "Approved";
      }
      case ApprovalStatus.Rejected:{
        return "Rejected";
      }
      case ApprovalStatus.None:{
        return "Unreviewed";
      }
    }
  }

  changeApprovalStatus(playlistEntry: PlaylistEntry, approvalStatus: ApprovalStatus){
    console.log(playlistEntry, approvalStatus);
    playlistEntry.approvalStatus = approvalStatus;
    this.playlistService.updateEntry(playlistEntry).subscribe(x => {
      this.getAllEntries();
    });
  }

  public static sort(one: PlaylistEntry, two: PlaylistEntry) {
    if (one.approvalStatus < two.approvalStatus) {
        return 1;
    }
    if (two.approvalStatus < one.approvalStatus) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

}
