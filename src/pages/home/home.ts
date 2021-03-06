import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BindPage} from "../bind/bind";
import {ComponentPage} from "../component/component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {"id":1, "name":"Component"},
    {"id":2, "name":"두번째 Item"},
    {"id":3, "name":"세번째 Item"}
  ];

  userName : any;

  constructor(public navCtrl: NavController) {
    // this.userName = "아이오닉";
  }

  itemSelected(item){
    if(item.id === 1){
      this.navCtrl.push("ComponentPage");
    }

  }

  myButton(event){

    if(typeof this.userName !== "undefined"){
      console.log(event.target.textContent + " " + event.clientX + ", " + event.clientY);

      this.navCtrl.push("BindPage", {name:this.userName});

    }else{
      // 입력값이 없는 경우
      alert("userName 값을 입력하십시오!");
    }


  }

  disabledSwitch = false;

  ionViewDidLoad(){
    console.log("1. Home ionViewDidLoad()");
  }

  ionViewWillEnter(){
    console.log("2. Home ionViewWillEnter()");
  }


}
