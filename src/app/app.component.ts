import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAoVF1GUvuG6ogx86GTbyaxZKWTK27rztI",
      authDomain: "recipe-app-32c80.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
