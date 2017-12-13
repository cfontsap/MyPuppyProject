import { AuthServiceProvider } from '../../providers/security/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Home',
  templateUrl: 'Home.html',
})
export class HomePage {
  name = "Welcome"

  constructor(public navCtrl: NavController, public auth: AuthServiceProvider, public navParams: NavParams) {
    
    // this should go in the header
  }

  isauthenthicated(){
    return this.auth.getAuthenthicated();
  }

  back(){
    this.navCtrl.setRoot(HomePage);
  }

}
