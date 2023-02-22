import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EventORG';
  constructor(private authService: AuthService) {}
  isLoggedIn = this.authService.isLoggedIn;
}
