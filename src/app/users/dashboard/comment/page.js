import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";
import Header from "@/components/dashboard/Header";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      {comments.length === 0 && (
        <h2 className="text-center text-color-primary text-2xl">
          Anda Tidak Mempunyai Riwayat Komentar..
        </h2>
      )}
      <div
        className="grid grid-cols-1 
      text-color-primary py-2 gap-4"
      >
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="font-bold text-2xl">{comment.anime_title}</p>
              <p className="text-lg">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
