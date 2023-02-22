import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login-loader',
  templateUrl: './login-loader.component.html',
  styleUrls: ['./login-loader.component.scss'],
})
export class LoginLoaderComponent {
  isLoading: Subject<boolean> = this.loadinService.isLoading;

  constructor(private loadinService: LoaderService) {}
}
