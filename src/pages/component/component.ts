import { Component } from '@angular/core';
import {
  AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {SlidePage} from "../slide/slide";
import {AccountInterface} from "../../interfaces/account";
import {NavPage} from "../nav/nav";
import {LoadingProvider} from "../../providers/loading/loading";

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

  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public platform: Platform,
              public modalCtrl : ModalController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public loaderProCtrl : LoadingProvider){
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

  promptAlert() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "이름과 E-Mail를 입력하세요",
        inputs: [
          { name: 'name', placeholder: 'Name 입력' },
          { name: 'email', placeholder: 'Email 입력' },
        ],
        buttons: [
          { text: '취소', handler: data => { console.log('Cancel clicked'); } },
          {
            text: '저장',
            handler: data => {
              this.accountData = { name : data.name, email : data.email }
              this.navCtrl.push('NavPage',{account:this.accountData});
            }
          }
        ]
      });
      prompt.present();
      console.log(this.accountData);
    }

  toast() {
    let toast = this.toastCtrl.create({
      message: '3초동안보였다가사라집니다.',
      duration: 3000,
      //position : 'top',
      showCloseButton : true,
      closeButtonText:"ok"
    });
    toast.present();
    toast.onDidDismiss((data) => console.log("토스트 사라짐" + data));
  }

  loading() {
    // let loading = this.loadingCtrl.create({
    //   content: '잠시만기다려주세요...'
    // });
    // loading.present();
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 3000);

    this.loaderProCtrl.show();

    setTimeout(()=> {
      this.loaderProCtrl.hide();

    }, 3000);
  }

}
