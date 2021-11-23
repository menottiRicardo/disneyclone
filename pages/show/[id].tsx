import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
type genre = {
  id: number;
  name: string;
};
type Show = {
  backdrop_path: string;
  id: number;
  genres: [genre];
  created_by: any;
  episode_run_time: any;
  first_air_date: string;
  homepage: string;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: any;
  name: string;
  networks: unknown;
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: ["US"];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any;
  production_countries: unknown;
  seasons: any;
  spoken_languages: unknown;
  status: string;
  tagline: string;
  type: string;
  videos: any;
  vote_average: number;
  vote_count: number;
};
interface Props {
  show: Show;
}
function Show({ show }: Props) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const index = show.videos.results.findIndex(
    (element: any) => element.type === "Trailer"
  );
  console.log(show);
  return (
    <div className="relative">
      <Head>
        <title>{show.name || show.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative z-50">
        {/* image */}
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${
                show.backdrop_path || show.poster_path
              }` || `${BASE_URL}${show.poster_path}`
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* description container absolute in the relative */}
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          {/* title */}
          <h1 className="text-3xl font-bold md:text-5xl">
            {show.name || show.original_name}
          </h1>
          {/* action container */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* play button */}
            <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
              <img
                src="/images/play-icon-black.svg"
                alt="play"
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">
                play
              </span>
            </button>
            {/* play trailer button */}
            <button
              className="text-xs md:text-base bg-[#040714] text-white flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] border border-white"
              onClick={() => (
                setShowPlayer(true), console.log("pressed")
              )}
            >
              <span className="uppercase font-medium tracking-wide h-6 md:h-8 flex items-center">
                Trailer
              </span>
            </button>

            {/* plus icon */}
            <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
              <PlusIcon className="h-6" />
            </div>

            {/* group play button */}
            <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
              <img src="/images/group-icon.svg" alt="" />
            </div>
          </div>

          {/* date and genres desc */}
          <p className="text-xs md:text-sm">
            {show.first_air_date} • SEASONS:{" "}
            {show.seasons.length} {" "} •{" "}
            {show.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="text-sm md:text-lg max-w-4xl">
            {show.overview}
          </h4>
        </div>

        {/* bg overlay*/}
        {showPlayer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
        )}
        {showPlayer === false && (
          <div className="absolute inset-x-0 bottom-0 bg-black opacity-10 h-1/4 w-full z-10"></div>
        )}
        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-700 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${show.videos?.results[index]?.key}`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const [popularShowsRes, top_ratedShowsRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularShows, top_ratedShows] = await Promise.all([
    popularShowsRes.json(),
    top_ratedShowsRes.json(),
  ]);

  // Get the paths we want to pre-render based on posts
  // const paths = popularMovies.results.map((movie:any) => ({
  //   params: { id: movie.id },
  // }));
  //   const paths = [{ params: { id: "1234" } }];
  const path1 = popularShows.results.map((movie: any) => ({
    params: { id: movie.id.toString() },
  }));
  const path2 = top_ratedShows.results.map((movie: any) => ({
    params: { id: movie.id.toString() },
  }));
  const paths = path1.concat(path2);
  //   console.log("path1", path1);
  //     console.log("path2", path2);
  //     console.log('paths', paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: any) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`
    https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`);
  const show = await res.json();
  //   console.log("movie", movie);

  // Pass post data to the page via props
  return { props: { show } };
};

export default Show;
