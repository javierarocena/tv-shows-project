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
  currentSearch?: string;
  isError = false;
  private defaultSearch = 'Mr.';
  private maxResults = 6;

  constructor(public showsFeatures: ShowsFeaturesService) {}

  async ngOnInit() {
    this.search();
  }

  async search(name: string = this.defaultSearch) {
    this.currentSearch = name;
    const { result, error } = await this.showsFeatures.search(name);
    if (error) return this.onSearchError();
    if (result?.length === undefined) return;
    result.length = this.maxResults;
    this.shows = result;
  }

  private onSearchError() {
    this.isError = true;
  }
}
