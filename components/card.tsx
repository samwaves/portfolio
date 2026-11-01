import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
}

export default function Card({
  title,
  subtitle,
  description,
  href,
  image,
}: CardProps) {
  return (
    <article className="grid gap-5 md:gap-10 md:grid-cols-2">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={image}
          fill
          className="object-cover aspect-video"
        ></Image>
      </div>

      <div className="grid gap-2">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        <p>{description}</p>
        <Link
          href={href}
          className="w-fit underline text-sky-700 dark:text-sky-300"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
