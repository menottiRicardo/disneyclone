import ShowThumbnail from "./ShowThumbnail";

type show = {
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
  
  interface ShowsProps {
    title: string;
    shows: [show];
  }
function ShowsCollection({shows, title}:ShowsProps) {
  return (
    <section
      id="tv"
      className="relative flex flex-col space-y-2 my-10 md:px-8 mx-auto layout"
    >
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 -m-2 scrollbar-hide md:scrollbar-default">
        {shows.map((show) => (
          <ShowThumbnail key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}

export default ShowsCollection;
