import Head from "next/head";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative">
      <Head>
        <title>Log in | Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            This is Just a Clone
          </button>
          <p className="text-xs text-center ">
            This site is Incremantally Statiticly Generetaring with NextJs ISG.
            The clone shows popular movies and shows from multiple providers using TMBD API;
            even though you cant watch movies, you are able to check the trailer from movies
            You can create an account or use the username: ricardo and the password:Ricardo
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
