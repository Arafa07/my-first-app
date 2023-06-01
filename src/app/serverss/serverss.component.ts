import { Component } from '@angular/core';

@Component({
  selector: 'app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent {

  funcShow2Way = ''
  userName: string = '';
  notEmptyUserName: boolean = true;

  constructor() {

  }
  onClickedFunc() {
    console.log(this.userName)
  }


  onUserNameFilled() {
    this.userName = '';
    this.notEmptyUserName = true;



  }
  nameChanged() {
    if (this.userName.length > 0) {
      this.notEmptyUserName = false;
    } else {
      this.notEmptyUserName = true;
    }

  }
}
