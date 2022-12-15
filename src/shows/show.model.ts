export interface Show {
  id: number;
  name: string;
  summary: string;
  genres: string[];
  rating?: {
    average?: number;
  };
  image?: {
    medium?: string;
  };
}
