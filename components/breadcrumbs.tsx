"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();
  if (segments.length < 2) return null;
  return (
    <ul className="-mb-10 flex capitalize text-gray-800 dark:text-gray-200">
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        return (
          <li
            key={index}
            className="after:mx-2 after:content-['/'] last:after:content-none"
          >
            {isLast ? (
              <span>{segment.replaceAll("-", " ")}</span>
            ) : (
              <Link
                href={href}
                className="no-underline hover:underline text-muted"
              >
                {segment.replaceAll("-", " ")}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
