import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent {
  @Input() value?: number;
  @Input() numberOfStars: number = 5;

  initialStars?: number;

  ngOnInit() {
    if (typeof this.value !== 'number') return;
    this.initialStars = (this.numberOfStars * this.value) / 10;
  }
}
