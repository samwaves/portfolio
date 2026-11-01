import type { Metadata } from "next";
import { Geist_Pixel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const pixel = Geist_Pixel({
  variable: "--font-pixel",
  fallback: ["system-ui", "arial"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Lee",
  description: "Samuel Lee's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${pixel.variable} h-full`}>
      <body className="min-h-full max-w-3xl mx-auto p-5 flex flex-col gap-5 font-pixel">
        <Navbar />
        <main className="my-10 grid gap-10">{children}</main>
        <footer>
          Built with Next.js ·{" "}
          <a
            href="https://github.com/samwaves/portfolio"
            className="underline text-sky-700 dark:text-sky-300"
          >
            View source
          </a>
        </footer>
      </body>
    </html>
  );
}
