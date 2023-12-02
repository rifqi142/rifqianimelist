"use client";
import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response);
    const collection = await response.json();
    if (collection.status === 200) {
      setIsCreated(collection.isCreated);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil Ditambahkan Ke Koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-accent"
        >
          Add to Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
