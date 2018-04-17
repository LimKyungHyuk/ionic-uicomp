import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage({name:'bindPage'})
@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad(){
    console.log("1. bind ionViewDidLoad()" + this.navParams.get("name"));
  }

  ionViewWillEnter(){
    console.log("2. bind ionViewWillEnter()");
  }

  ionViewWillUnload(){
    console.log("3. bind ionViewWillUnload()");
  }

}
