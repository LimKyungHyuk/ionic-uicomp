import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {SlidePage} from "../slide/slide";
/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public platform: Platform,
              public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  modal(){
    let modal = this.modalCtrl.create("ModalPage");
    modal.onDidDismiss(data => console.log(data));
    modal.present();

  }

  slide(){
    this.navCtrl.push("SlidePage");


  }

}
