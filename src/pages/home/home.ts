import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response  } from '@angular/http';

import { GaleriaPage } from '../galeria/galeria';
import { AppPage } from '../app/app';

import { TestPage } from '../test/test';


import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
private url:String = 'http://localhost:3030/v1'; 
public beers: Array<{}>;
  constructor(
    public navCtrl: NavController, 
    public hptt: Http) {

this.hptt.get(this.url +'/beers')
      .map(res=>res.json())
      .subscribe(data=>{
        console.log(data);
      });
  }

  goToTestPage(){
this.navCtrl.push(TestPage);

  }
  goToGaleriaPage(){
    this.navCtrl.push(GaleriaPage);
    
      }
      goToAppPage(){
        this.navCtrl.push(AppPage);
        
          }
}
