import { Injectable } from '@angular/core';
import { ShowsTVMazeRepository } from './repositories/shows.tvmaze.repository';
import { ShowsRepository } from './repositories/shows.repository.model';
import { Show } from './show.model';
import { Response } from './response.model';

@Injectable({ providedIn: 'root' })
export class ShowsFeaturesService {
  private repository: ShowsRepository = new ShowsTVMazeRepository();

  search(name: string): Promise<Response<Show[]>> {
    return this.repository.getByName(name);
  }

  getSingleByName(name: string): Promise<Response<Show>> {
    return this.repository.getSingleByName(name);
  }
}
