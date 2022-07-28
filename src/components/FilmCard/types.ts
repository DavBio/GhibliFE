export interface FilmCardProps {
    film: {
      _id: string;
      title: string;
      original_title: string;
      movie_banner: string;
      description: string;
      director: string;
      producer: string;
      release_date: string;
    };
    onClick?: () => void;
  }
  