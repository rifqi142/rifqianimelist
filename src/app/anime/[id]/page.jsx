import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  // mencari data collection berdasarkan user_email dan anime_mal_id
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton anime_mal_id={id} user_email={user?.email} />
        )}
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto overflow-hidden">
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>PERINGKAT</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>SKOR</h3>
            <p>{anime.data.score}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>POPULARIITY</h3>
            <p>{anime.data.popularity}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>FAVORITES</h3>
            <p>{anime.data.favorites}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>ANGGOTA</h3>
            <p>{anime.data.members}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>EPISODE</h3>
            <p>{anime.data.episodes}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>TAHUN</h3>
            <p>{anime.data.year}</p>
          </div>
          <div
            className="w-36 flex flex-col justify-center 
          items-center rounded border border-color-primary p-2"
          >
            <h3>SEASON</h3>
            <p>{anime.data.season}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
          <div>
            <h1 className="text-2xl">Sysnopsis:</h1>
            <hr />
            <p className="text-justify text-xl">{anime.data.synopsis}</p>
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
