import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { ResultsComponent } from './results/results.component';
import { WeatherService } from './weather.service';


const routes: Routes = [
  { path: '',   redirectTo: '/main-view', pathMatch: 'full' },
  { path: 'main-view', component: MainviewComponent },
  { path: 'results/:city', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WeatherService]
})
export class AppRoutingModule { }
