import { CommonService } from './../common.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers: any;
  @Output() sendToParent = new EventEmitter();

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.userAdded.subscribe(res => {
      console.log("User added from parent");
      this.getLatestUsers();
    })
    this.getLatestUsers();
  }

  getLatestUsers(){
    this.commonService.getLatestUsers().subscribe(res => {
      console.log(res);
    this.allUsers = res;
    })
  }

  editUser(user){
    this.sendToParent.emit(user)
    console.log(user);
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(res =>{
      this.getLatestUsers();
    })
  }

}
