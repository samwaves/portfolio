import type { Metadata } from "next";
import { Geist_Pixel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Breadcrumbs from "@/components/breadcrumbs";

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
      <body className="min-h-full sm:max-w-xl md:max-w-3xl mx-auto p-5 flex flex-col gap-5 font-pixel">
        <Navbar />
        <main className="grow content-start my-10 grid gap-10">
          <Breadcrumbs />
          {children}
        </main>
        <footer>
          Built with Next.js •{" "}
          <a href="https://github.com/samwaves/portfolio" target="_blank">
            View source ↗
          </a>
        </footer>
      </body>
    </html>
  );
}
