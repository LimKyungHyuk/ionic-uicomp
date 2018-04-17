import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {"id":1, "name":"첫번째 Item"},
    {"id":2, "name":"두번째 Item"},
    {"id":3, "name":"세번째 Item"}
  ];

  userName : any;

  constructor(public navCtrl: NavController) {
    this.userName = "아이오닉";
  }

}
