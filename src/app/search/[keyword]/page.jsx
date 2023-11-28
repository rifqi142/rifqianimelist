import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;

  // decode keyword agar tidak ada % di url saat space
  const decodedKeyword = decodeURIComponent(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );

  const searchAnime = await response.json();

  return (
    <>
      {/* Top Animes */}
      <section>
        <Header title={`Hasil Pencarian: ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
