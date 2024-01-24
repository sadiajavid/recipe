
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
 
  loadedFeature: string = 'recipe'; 

  onNavigate(selectedFeature: string) {
    this.loadedFeature = selectedFeature;
  }
}
