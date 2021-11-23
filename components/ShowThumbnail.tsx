import Image from "next/image";
import { useRouter } from "next/router";
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
interface ShowThumbnailProps {
  show: show;
}
function ShowThumbnail({ show }: ShowThumbnailProps) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  return (
    <div
      className="flex min-w-[130px] min-h-[170px] md:min-w-[200px] md:min-h-[150px] 2xl:min-w-[300px] 2xl:min-h-[150px]  rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-0  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 w-52 h-32 sm:w-64 sm:h-36 2xl:w-80 2xl:h-48"
      onClick={() => router.push(`/show/${show.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${show.backdrop_path || show.poster_path}` ||
          `${BASE_URL}${show.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

export default ShowThumbnail;
