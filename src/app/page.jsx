import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const topAnime = await response.json();

  return (
    <>
      {/* Top Animes */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
