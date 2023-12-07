import Link from "next/link";
import Image from "next/image";
import Header from "@/components/dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();
  const collections = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title={"My Collection"} />
        {collections.length !== 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collect, index) => {
              return (
                <Link
                  key={index}
                  href={`/anime/${collect.anime_mal_id}`}
                  className="relative border-2 border-color-accent"
                >
                  <Image
                    src={collect.anime_image}
                    alt="anime image"
                    width={350}
                    height={350}
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="absolute flex items-center bottom-0 justify-center w-full bg-color-accent h-16">
                    <h5 className="text-xl text-center">
                      {collect.anime_title}
                    </h5>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-color-primary text-center text-2xl">
            <h1>Data Kosong</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
