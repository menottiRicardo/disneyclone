import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <div className="sticky bg-[#040714] top-0 z-[100] flex h-[72px] items-center px-10 md:px-12">
      {/* logo section */}
      <h1 className="text-white text-xl">Disney Clone</h1>

      {/* links */}
      <div className="hidden ml-10 md:flex items-center space-x-10">
        <a href="#" className="header-link group">
          <HomeIcon className="h-5 w-5" />
          <span className="span">Home</span>
        </a>

        <a href="#" className="header-link group">
          <SearchIcon className="h-5 w-5" />
          <span className="span">Search</span>
        </a>

        <a href="#" className="header-link group">
          <PlusIcon className="h-5 w-5" />
          <span className="span">Watchlist</span>
        </a>

        <a href="#" className="header-link group">
          <StarIcon className="h-5 w-5" />
          <span className="span">Originals</span>
        </a>

        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>

        <a className="header-link group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
      {/* Button that only shows when not logged in */}
      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
        Login
      </button>
    </div>
  );
}

export default Header;
