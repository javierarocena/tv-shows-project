import { Component } from '@angular/core';
import { Show } from 'src/shows/show.model';
import { ShowsFeaturesService } from 'src/shows/shows.features.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  shows?: Show[];
  private defaultSearch = 'Mr.';
  private maxResults = 6;

  constructor(public showsFeatures: ShowsFeaturesService) {}

  async ngOnInit() {
    this.search();
  }

  async search(name: string = this.defaultSearch) {
    const result = await this.showsFeatures.search(name);
    result.length = this.maxResults;
    this.shows = result;
  }
}
