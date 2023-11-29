import Image, { StaticImageData } from "next/image";
import React from "react";

interface ItemCardProps {
  imageSrc: string | StaticImageData;
  title: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imageSrc, title }) => {
  return (
    <div className=" w-full rounded overflow-hidden drop-shadow-lg bg-gray-700">
      <div className="relative w-full aspect-[10/3]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-center object-contain p-3 rounded-t"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default ItemCard;
