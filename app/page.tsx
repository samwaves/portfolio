import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-10">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/home/banner.jpg"
          alt="banner"
          width={1692}
          height={1142}
          className="lg:order-2"
        ></Image>
        <div className="grid gap-10 lg:gap-5">
          <h1 className="text-6xl">Samuel Lee</h1>
          <p className="text-2xl">
            Software engineer with full-stack experience, exploring machine
            learning.
          </p>
          <div className="flex gap-5 underline text-sky-700">
            <a>Copy Email</a>
            <a>View Resume</a>
          </div>
        </div>
      </section>

      <section className="grid gap-5">
        <h2 className="text-3xl">Experience</h2>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Software Engineering Internship</h3>
            <p className="text-neutral-500 text-sm">
              Alphabag Limited • Winter 2025
            </p>
            <p>
              Description of this experience. This experience is very cool. Yay.
              This is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
      </section>

      <section className="grid gap-5">
        <h2 className="text-3xl">Selected Work</h2>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Student Management System</h3>
            <p className="text-neutral-500 text-sm">NextJS • Firebase</p>
            <p>
              Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Student Management System</h3>
            <p className="text-neutral-500 text-sm">NextJS • Firebase</p>
            <p>
              Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Student Management System</h3>
            <p className="text-neutral-500 text-sm">NextJS • Firebase</p>
            <p>
              Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Student Management System</h3>
            <p className="text-neutral-500 text-sm">NextJS • Firebase</p>
            <p>
              Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
        <article className="grid gap-10 lg:grid-cols-2">
          <div className="grid">
            <h3 className="text-xl">Student Management System</h3>
            <p className="text-neutral-500 text-sm">NextJS • Firebase</p>
            <p>
              Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description.
            </p>
            <Link href="/about" className="w-fit underline">
              View more
            </Link>
          </div>
          <div>
            <div className="aspect-video bg-black"></div>
          </div>
        </article>
      </section>
    </main>
  );
}
