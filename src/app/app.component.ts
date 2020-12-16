import { CommonService } from './common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crud';
  usrobj={
    userName:"",
    email:"",
    id:""
  }
  isEdit: boolean;

  constructor(private commonService:CommonService) {}

  addUser(userForm){
    console.log(userForm.value)
    let obj = userForm.value;
    obj.id=null;
    this.commonService.createUser(obj).subscribe(response => {
      console.log("User Added Successfully");
      userForm.form.reset();
      this.commonService.informChild();

    })
  }

  receiveUser(user){
    console.log(user);
    this.usrobj=Object.assign({},user);
    this.isEdit=true
  }

  updateUser(userForm){
    this.commonService.updateUser(this.usrobj).subscribe(() =>{
      console.log("user updated");
      this.commonService.informChild();
      this.isEdit=false;
      userForm.form.reset();
    })
    
    
  }

}
