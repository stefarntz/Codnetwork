import Image, { StaticImageData } from "next/image";
import React from "react";

interface ItemCardProps {
  imageSrc: string | StaticImageData;
  imageScrCamo: string | StaticImageData;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  imageSrc,
  imageScrCamo,
  title,
  description,
}) => {
  return (
    <div className="max-w-md w-full rounded-2xl overflow-hidden drop-shadow-lg bg-neutral-700">
      <div className="px-3 py-2">
        <div className="font-bold text-l">{title}</div>
        <div className="text-xs">{description}</div>
      </div>

      <div className="relative w-full aspect-[10/3]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-center object-contain p-2"
        />
      </div>

      <div className="px-3 py-3 w-full flex justify-center flex-wrap gap-3">
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
        <Image src={imageScrCamo} alt={title} width={40} height={40} />
      </div>
    </div>
  );
};

export default ItemCard;
