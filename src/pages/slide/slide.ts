import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  private images = [
    {title:"assets/imgs/1.jpg"},
    {title:"assets/imgs/2.jpg"},
    {title:"assets/imgs/3.jpg"},
    {title:"assets/imgs/4.jpg"},
    {title:"assets/imgs/5.jpg"},
  ];

  private cardImages = [
    {src : "assets/imgs/1.jpg", title:"클론의 습격", subtitle:"41 list"},
    {src : "assets/imgs/2.jpg", title:"바람과 함께 사라지다", subtitle:"301 list"},
    {src : "assets/imgs/3.jpg", title:"센과 치이로의 모험", subtitle:"20 list"},
    {src : "assets/imgs/4.jpg", title:"토토", subtitle:"52 list"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

}
