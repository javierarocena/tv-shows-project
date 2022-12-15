import { Show } from '../show.model';

export interface ShowsRepository {
  getByName: (name: string) => Promise<Show[]>;
}
