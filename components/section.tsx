import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="grid gap-5">
      <h2 className="text-3xl">{title}</h2>
      {children}
    </section>
  );
}
