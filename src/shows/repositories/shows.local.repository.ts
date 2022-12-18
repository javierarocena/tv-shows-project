import { SHOWS_MOCK } from '../mocks/shows.mock';
import { Show } from '../show.model';
import { ShowsRepository } from './shows.repository.model';
import { Response } from '../response.model';

export class ShowsLocalRepository implements ShowsRepository {
  async getByName(name: string): Promise<Response<Show[]>> {
    return {
      result: SHOWS_MOCK.filter((s) => s.name.includes(name)),
    };
  }

  async getSingleByName(name: string): Promise<Response<Show>> {
    const { result, error } = await this.getByName(name);
    return {
      error,
      result: result?.length ? result[0] : undefined,
    };
  }
}
