import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contest-card',
  templateUrl: './contest-card.component.html',
  styleUrls: ['./contest-card.component.scss'],
})
export class ContestCardComponent {
  @Input() contestData!: any;
}
