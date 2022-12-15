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

  constructor(
    public showsFeatures: ShowsFeaturesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const name = this.route.snapshot.paramMap.get('showName')!;
    this.show = await this.showsFeatures.getSingleByName(name);
  }

  onBackBtnPressed() {
    this.router.navigateByUrl('/');
  }
}
