import React from "react";
import Image from "next/image";

export default function ThumbnailList({ images, onImageClick }) {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {images &&
        images.map((imageUrl, index) => (
          <button key={index} onClick={() => onImageClick(imageUrl)}>
            <Image
              src={imageUrl}
              width={80}
              height={80}
              alt={`Thumbnail ${index}`}
              className="object-contain w-20 h-20 rounded-lg border"
            />
          </button>
        ))}
    </div>
  );
}
