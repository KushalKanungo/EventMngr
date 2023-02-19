import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.scss'],
})
export class ContestPageComponent {
  constructor(private router: Router) {}
  eventName = 'Renissance 2023';
  contests = [
    {
      title: 'Hackathon',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum libero, error aliquam autem rerum perspiciatis recusandae facilis vitae? Adipisci.',
      date: Date.now(),
    },
    {
      title: 'WebDev',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum libero, error aliquam autem rerum perspiciatis recusandae facilis vitae? Adipisci.',
      date: Date.now(),
    },
    {
      title: 'Hackathon',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum libero, error aliquam autem rerum perspiciatis recusandae facilis vitae? Adipisci.',
      date: Date.now(),
    },
    {
      title: 'Hackathon',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum libero, error aliquam autem rerum perspiciatis recusandae facilis vitae? Adipisci.',
      date: Date.now(),
    },
    {
      title: 'Hackathon',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum libero, error aliquam autem rerum perspiciatis recusandae facilis vitae? Adipisci.',
      date: Date.now(),
    },
  ];
  onClickHandeler() {
    this.router.navigate(['contest']);
  }
}
