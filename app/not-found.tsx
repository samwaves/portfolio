import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <p>Page not found.</p>
      <Link href="/" className="underline text-sky-700 dark:text-sky-300">
        Return home
      </Link>
    </article>
  );
}
