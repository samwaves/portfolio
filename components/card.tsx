import Link from "next/link";
import { StaticImageData } from "next/image";
import TintedImage from "./tinted-image";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  image?: StaticImageData;
  eagerLoadImage?: boolean;
}

export default function Card({
  title,
  subtitle,
  description,
  href,
  image,
  eagerLoadImage,
}: CardProps) {
  return (
    <article className="grid gap-5 md:gap-10 md:grid-cols-2">
      {image ? (
        <TintedImage
          src={image}
          alt={title}
          eagerLoadImage={eagerLoadImage}
          aspectVideo
        ></TintedImage>
      ) : (
        <div className="bg-slate-500 aspect-video"></div>
      )}

      <div className="grid gap-2 content-center">
        <h3>{title}</h3>
        <p className="text-sm text-muted">{subtitle}</p>
        <p>{description}</p>
        {href && (
          <Link href={href} className="w-fit">
            Read More
          </Link>
        )}
      </div>
    </article>
  );
}
