import { Show } from '../show.model';
import { ShowsRepository } from './shows.repository.model';
import { Response } from '../response.model';

interface ServerShow {
  score: number;
  show: Show;
}

export class ShowsTVMazeRepository implements ShowsRepository {
  getByName(name: string): Promise<Response<Show[]>> {
    return new Promise((resolve) => {
      fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        .then(async (res) => {
          const a = (await res.json()) ?? [];
          resolve({
            result: a.map((b: ServerShow) => this.showMapper(b)),
          });
        })
        .catch((error) => {
          resolve({
            error,
          });
        });
    });
  }

  async getSingleByName(name: string): Promise<Response<Show>> {
    const { result, error } = await this.getByName(name);
    return {
      error,
      result: result?.length ? result[0] : undefined,
    };
  }

  private showMapper(serverShow: ServerShow): Show {
    return serverShow.show;
  }
}
