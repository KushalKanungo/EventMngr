import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private loader: LoaderService
  ) {}

  loginButtonHandeler() {
    console.log('Button Clicked');
    this.loader.show('loading');
    setTimeout(() => {
      this.router.navigate(['contests']);
      this.authService.authorize();
      this.loader.hide('loading');
      console.log('Should Navigate Now');
    }, 2000);
  }
}
