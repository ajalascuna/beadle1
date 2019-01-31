import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage} from '../../pages/home/home';
import { RegisterPage } from '../register/register';

import 'rxjs/add/operator/map';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})


export class ProfilePage {



data:any;
username:any;
items:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http,  public loading: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit(){
    this.username = this.navParams.get('username');
    
var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );
let options = new RequestOptions({ headers: headers });

let data = {
    username: this.username
    
  };


let loader = this.loading.create({
content: 'Processing please wait...',
});

loader.present().then(() => {
//this.http.post('http://ionicdon.com/mobile/fetch_data2.php',data, options)
this.http.post('http://localhost:8080/beadle1/fetch_data.php',data, options)
.map(res => res.json())
    .subscribe(res => {
    
     loader.dismiss()
    this.items=res.server_response;
    
    console.log(this.items);
    });
    });
     }


/*
     attendance(){

      //// check to confirm the username and password fields are filled
    
       var headers = new Headers();
         headers.append("Accept", 'application/json');
         headers.append('Content-Type', 'application/json' );
         let options = new RequestOptions({ headers: headers });
    
    
           let data = {
             subj_id: this.subj_id.value,
           };
    
          
    
      let loader = this.loading.create({
         content: 'Processing please wait...',
       });
    
      loader.present().then(() => {
    
    
       //this.http.post('http://ionicdon.com/mobile/login.php',data,options)
       this.http.post('http://localhost:8080/beadle1/login.php',data,options)
       .map(res => res.json())
       .subscribe(res => {
    //     console.log(res)
    
    
         loader.dismiss()
       if(res=="Successful"){
       
         let alert = this.alertCtrl.create({
           title:"CONGRATS",
           subTitle:(res),
           buttons: ['OK']
           });
         
           alert.present();
           //this.navCtrl.push(ProfilePage, data);
           this.navCtrl.push(ProfilePage, data);
    
       }
       else
      {
       let alert = this.alertCtrl.create({
       title:"ERROR",
       buttons: ['OK']
       });
      
       alert.present();
        } 
      });
       });
       
      }

*/

    }

    




/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


