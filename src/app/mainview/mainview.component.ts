import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/enviornment.dist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {

  temp: String;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("got here");
  }


  getWeather() {
    let city = document.getElementById("city").value;
    this.router.navigate(['/results', city]);



  }

}
