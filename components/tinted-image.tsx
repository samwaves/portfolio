import Image, { StaticImageData } from "next/image";

interface TintedImageProps {
  src: StaticImageData;
  alt: string;
  eagerLoadImage?: boolean;
  aspectVideo?: boolean;
}

export default function TintedImage({
  src,
  alt,
  eagerLoadImage,
  aspectVideo,
}: TintedImageProps) {
  return (
    <div className="relative w-full bg-slate-500">
      <Image
        src={src}
        alt={alt}
        loading={eagerLoadImage ? "eager" : "lazy"}
        className={`object-cover grayscale mix-blend-hard-light hover:grayscale-0 hover:mix-blend-normal ${aspectVideo && "aspect-video"}`}
      ></Image>
    </div>
  );
}
