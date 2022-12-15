import { Injectable } from '@angular/core';
import { ShowsTVMazeRepository } from './repositories/shows.tvmaze.repository';
import { ShowsRepository } from './repositories/shows.repository.model';
import { Show } from './show.model';

@Injectable({ providedIn: 'root' })
export class ShowsFeaturesService {
  private repository: ShowsRepository = new ShowsTVMazeRepository();

  search(name: string): Promise<Show[]> {
    return this.repository.getByName(name) ?? [];
  }

  async getSingleByName(name: string): Promise<Show | undefined> {
    return (await this.search(name))[0];
  }
}
