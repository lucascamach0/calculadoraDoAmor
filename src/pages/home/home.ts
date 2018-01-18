import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = "";
  name2 = "";
  get score(){
    const letters = (this.name1 + this.name2).toLocaleLowerCase();
    let sum = 0;
    for (var i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);    
    }

    if(this.name1.search("camacho") != -1){
      return 100;
    }
    return sum % 101;
  }
}

