import { JitEvaluator } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals = ['dog', 'cat', 'cow'];
  name! : string;
  age = 23;
  img = 'https://assets.unileversolutions.com/recipes-v2/218401.jpg';
}
