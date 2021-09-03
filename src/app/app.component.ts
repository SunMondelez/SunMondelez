import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: ServiceService) { }
  title = 'weather';
  Zipcode: string = '';
  response: any;
  Temp:Number;
  country:string;
  CityName:string;
  MinTemp : Number;
  MaxTemp :Number;
  Humi:Number;
  Feellike:string

  ngOnInt() {
  }

  getdata() {
    this.service.fetchData(this.Zipcode).subscribe(res => {
      // console.log(res)
      this.response = res;
      this.Temp = this.response.main.temp;
      this.country = this.response.sys.country;
      this.CityName = this.response.name;
      this.MaxTemp = this.response.main.temp_max;
      this.MinTemp = this.response.main.temp_min;
      this.Humi = this.response.main.humidity
      this.Feellike = this.response.weather[0].description;
    });
  }
}
