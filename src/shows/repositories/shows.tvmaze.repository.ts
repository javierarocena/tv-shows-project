import { Show } from '../show.model';
import { ShowsRepository } from './shows.repository.model';

interface ServerShow {
  score: number;
  show: Show;
}

export class ShowsTVMazeRepository implements ShowsRepository {
  getByName(name: string): Promise<Show[]> {
    return new Promise(async (resolve) => {
      const res = await fetch(`http://api.tvmaze.com/search/shows?q=${name}`);
      const a = (await res.json()) ?? [];
      resolve(a.map((b: ServerShow) => this.showMapper(b)));
    });
  }

  private showMapper(serverShow: ServerShow): Show {
    return serverShow.show;
  }
}
