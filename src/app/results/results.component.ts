import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  results: object;
  constructor(private weatherservice: WeatherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let city = this.route.snapshot.paramMap.get('city');
    this.results = this.weatherservice.getResults(city);
    console.log(this.results);

  }


  backBtn() {
    this.router.navigateByUrl('/main-view');
  }


}
