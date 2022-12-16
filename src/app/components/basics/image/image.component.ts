import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src?: string;
  @Input() alt?: string;

  onImgError(event: any) {
    event.target.src = './assets/pictures/not-found.jpeg';
  }
}