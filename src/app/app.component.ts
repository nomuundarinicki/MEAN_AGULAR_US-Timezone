import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'US Time Zone Display';
  zones: Array<object> =[
    {abbr: 'PST', clicked: false, offset: 0},
    {abbr: 'MST', clicked: false, offset: 1*3600000},
    {abbr: 'CST', clicked: false, offset: 2*3600000},
    {abbr: 'EST', clicked: false, offset: 3*3600000}];
  zoneNow: any = Date.now();
  clicked: boolean = false;

  clickThis(tzAbbreviation){
    for (let i = 0; i < this.zones.length; ++i){
      if (this.zones[i]["abbr"] === tzAbbreviation){
        this.zones[i]["clicked"] = true;
        this.clicked = true;
        this.zoneNow = Date.now() + this.zones[i]["offset"]
      }else{
        this.zones[i]["clicked"] = false;
      }
    }
    return;
  }

  buttonBackground(tzAbbreviation){
    let whetherClicked = this.zones.find((obj)=>{
      return obj['abbr'] === tzAbbreviation;
    })['clicked'];
    if (whetherClicked){
      return 'yellow';
    }else{
      return '#F3F3F3';
    }
  }

  clearAll(){
    for (let i = 0; i < this.zones.length; ++i){
      this.zones[i]['clicked'] = false;
    }
    this.clicked = false;
    this.zoneNow = Date.now();
    return;
  }
}