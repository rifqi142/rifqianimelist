import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduceData,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduceData(recommendedAnime, 4);
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
      {/* Recommendation Animes */}
      <section>
        <Header title="Rekomendasi Animes" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
