import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { GetStaticProps } from "next";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";

const Home: NextPage = ({ popularMovies,popularShows, top_ratedMovies, top_ratedShows }: any) => {
  console.log("movies", popularShows);
  return (
    <div>
      <Head>
        <title>Disney+ Clone</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brand />
        <MoviesCollection movies={popularMovies} title="Popular Movies"/>
        <MoviesCollection movies={top_ratedMovies} title="Top Rated Movies"/>
        <ShowsCollection shows={popularShows} title="Popular Shows" />
        <ShowsCollection shows={top_ratedShows} title="Top Rated Shows" />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  // console.log('popular', popularShowsRes)
  const [
    popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,
  ] = await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ]);

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
};
