import { Response } from '../response.model';
import { Show } from '../show.model';

export interface ShowsRepository {
  getByName: (name: string) => Promise<Response<Show[]>>;
  getSingleByName: (name: string) => Promise<Response<Show>>;
}
