import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  subtitle,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-3xl">
      <hgroup>
        <h1>{title}</h1>
        <p className="mt-5 text-muted">{subtitle}</p>
      </hgroup>
      <div className="mt-10 space-y-5 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-5 [&_a]:underline [&_a[target='\_blank']]:after:content-['_↗']">
        {children}
      </div>
    </article>
  );
}
