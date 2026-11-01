import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/home/banner.jpg"
          alt="banner"
          width={1692}
          height={1142}
          className="md:order-2"
        ></Image>
        <div className="grid gap-5">
          <h1 className="text-6xl">Samuel Lee</h1>
          <p className="text-2xl">
            Software engineer with full-stack experience, exploring machine
            learning.
          </p>
          <div className="flex gap-5 underline text-sky-700 dark:text-sky-300">
            <a>Copy Email</a>
            <a>View Resume</a>
          </div>
        </div>
      </section>

      <Section title="Experience">
        <Card
          title="Software Engineering Internship"
          subtitle="Alphabag Limited • Winter 2025"
          description="Description of this experience. This experience is very cool. Yay.
              This is a short description. This is a short description."
          href="/experience/alphabag"
          image="/images/alphabag/alphabag-1.jpg"
        />
      </Section>

      <Section title="Selected Work">
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase"
          description="Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description."
          href="/projects/student-management-system"
          image="/images/alphabag-sms/timetable.jpg"
        />
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase"
          description="Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description."
          href="/projects/student-management-system"
          image="/images/alphabag-sms/timetable.jpg"
        />
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase"
          description="Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description."
          href="/projects/student-management-system"
          image="/images/alphabag-sms/timetable.jpg"
        />
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase"
          description="Description of this project. This project is very cool. Yay. This
              is a short description. This is a short description."
          href="/projects/student-management-system"
          image="/images/alphabag-sms/timetable.jpg"
        />
      </Section>
    </>
  );
}
