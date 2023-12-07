"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
    setShowWarning(false);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    if (comment.trim().split(/\s+/).length < 3) {
      setShowWarning(true);
      return;
    }

    const data = { anime_mal_id, user_email, username, comment, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const createComment = await response.json();
    if (createComment.status === 200) {
      setIsCreated(createComment.isCreated);
      setComment("");
      router.refresh();
    }
    console.log(createComment);
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Postingan terkirim...</p>}
      <textarea
        value={comment}
        onChange={handleInput}
        className="h-32 w-full text-xl p-4"
      />
      {showWarning && (
        <h1 className="text-color-red text-xl">
          Komentar harus terdiri dari minimal 3 kata.
        </h1>
      )}

      <button
        onClick={handlePosting}
        className="w-52 py-2 px-3 bg-color-accent"
      >
        Tambahkan Komentar
      </button>
    </div>
  );
};

export default CommentInput;
