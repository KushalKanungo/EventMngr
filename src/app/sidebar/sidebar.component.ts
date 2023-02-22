import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  companyHeading = 'JECRC';
  companySubHeading = 'Foundation';
  constructor(private router: Router) {}

  contestsLinkHandeler() {
    this.router.navigate(['contests']);
  }
}
