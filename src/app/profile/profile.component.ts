import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service'; 

@Component({

  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
repos:any;
username?:string;

  
constructor(private profileService:ProfileService) {
    
}

findProfile(){
  // this.profileService.updateProfile(this.username)
  this.profileService.getInfo().subscribe(profile =>{
   
   this.profile=profile;
 }); 

 this.profileService.getRepos().subscribe(repos =>{
   
   this.repos=repos;
 })
}

  ngOnInit(): void {
    this.profileService.updateProfile('kephanyamweya')
    this.profileService.getInfo().subscribe(profile =>{
      
      this.profile=profile;

  })
  }
}

