/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);

  const handleClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      imageGalleryRef.current &&
      !imageGalleryRef.current.contains(event.target as Node)
    ) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className=" container flex justify-center w-full h-auto flex-wrap-reverse gap-6"
      ref={imageGalleryRef}>
      {[
        "/AluraBooks.png",
        "/Capputeeno.png",
        "/Combo+Alura.png",
        "/Taskhub.png",
        "/A-Vision.png",
        "/FinanceFlow.png",
      ].map((src) => (
        <img
          key={src}
          src={src}
          alt={`imagem da ${src.replace(/[/.]/g, "")}`}
          onClick={() => handleClick(src)}
          style={{
            width: selectedImage === src ? "100%" : "48%",
            display:
              selectedImage === null || selectedImage === src
                ? "block"
                : "none",
          }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
