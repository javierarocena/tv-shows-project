import { SHOWS_MOCK } from '../mocks/shows.mock';
import { Show } from '../show.model';
import { ShowsRepository } from './shows.repository.model';

export class ShowsLocalRepository implements ShowsRepository {
  async getByName(name: string): Promise<Show[]> {
    return SHOWS_MOCK.filter((s) => s.name.includes(name));
  }
}
