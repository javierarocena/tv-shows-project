import { Injectable } from '@angular/core';
import { ShowsLocalRepository } from './repositories/shows.local.repository';
import { ShowsRepository } from './repositories/shows.repository.model';
import { Show } from './show.model';

@Injectable({ providedIn: 'root' })
export class ShowsFeaturesService {
  private repository: ShowsRepository = new ShowsLocalRepository();

  search(name: string): Promise<Show[]> {
    return this.repository.getByName(name) ?? [];
  }
}
