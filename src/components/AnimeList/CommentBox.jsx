import prisma from "@/libs/prisma";
import React from "react";
import { authUserSession } from "@/libs/auth-libs";

const CommentBox = async ({ anime_mal_id }) => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-color-dark bg-color-primary p-3 rounded-xl"
          >
            <div className="flex">
              <img src={user.image} className="w-20" />
              <div className="flex flex-col">
                <p className="pt-2 px-3 font-bold">{comment.username}</p>
                <p className="px-3 mt-3">{comment.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
