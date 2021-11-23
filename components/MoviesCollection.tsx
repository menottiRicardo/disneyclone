import MovieThumbnail from "./MovieThumbnail";

type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: unknown;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

interface MoviesProps {
  title: string;
  movies: [movie];
}
function MoviesCollection({ title, movies }: MoviesProps) {
  return (
    <section className="relative flex flex-col space-y-2 my-10 md:px-8 mx-auto layout" id="movies">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 -m-2 scrollbar-hide md:scrollbar-default">
        {movies.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MoviesCollection;
