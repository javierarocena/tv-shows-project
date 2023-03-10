import { Component, Input } from '@angular/core';
import { Show } from 'src/shows/show.model';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() show?: Show;
}
