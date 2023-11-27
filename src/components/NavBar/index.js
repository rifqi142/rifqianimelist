import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          RifqiAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default NavBar;
