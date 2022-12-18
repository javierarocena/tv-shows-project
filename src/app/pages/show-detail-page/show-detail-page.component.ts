import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/shows/show.model';
import { ShowsFeaturesService } from 'src/shows/shows.features.service';

@Component({
  selector: 'app-show-detail-page',
  templateUrl: './show-detail-page.component.html',
  styleUrls: ['./show-detail-page.component.scss'],
})
export class ShowDetailPageComponent {
  show?: Show;
  isError = false;

  constructor(
    public showsFeatures: ShowsFeaturesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('showName')!;
    this.getShowByName(name);
  }

  private async getShowByName(name: string) {
    const { result, error } = await this.showsFeatures.getSingleByName(name);
    if (error) return this.onSearchError();
    this.show = result;
  }

  private onSearchError() {
    this.isError = true;
  }

  onBackBtnPressed() {
    this.router.navigateByUrl('/');
  }
}
