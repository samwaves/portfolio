import TintedImage from "@/components/tinted-image";
import Link from "next/link";
import Section from "@/components/section";
import Card from "@/components/card";
import CopyEmail from "@/components/copy-email";

import bannerImage from "@/public/images/home/banner.jpg";
import alphabagThumbnail from "@/public/images/alphabag/alphabag-1.jpg";
import smsThumbnail from "@/public/images/alphabag-sms/timetable.jpg";
import avatarCreatorThumbnail from "@/public/images/alphabag-avatar-creator/export.jpg";
import vexV5CompetitionThumbnail from "@/public/images/vex-v5-competition/vex-v5-game.jpg";
import miniRovCompetitionThumbnail from "@/public/images/mini-rov-competition/rov-group-photo.jpg";

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2">
          <TintedImage
            src={bannerImage}
            alt="banner"
            eagerLoadImage
          ></TintedImage>
        </div>

        <div className="grid gap-2">
          <h1 className="text-6xl">Samuel Lee</h1>
          <p className="text-lg">
            Software engineer building full-stack apps and exploring machine
            learning.
          </p>
          <p className="text-sm">Year 2 • AI Engineering Student @ PolyU</p>
          <div className="flex gap-5 underline text-slate-500 dark:text-slate-400">
            <CopyEmail />
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex gap-2 items-center"
            >
              View Resume ↗
            </Link>
          </div>
        </div>
      </section>

      <Section title="Experience">
        <Card
          title="Software Engineering Intern"
          subtitle="Alphabag Limited • Winter 2025"
          description="Wrote two applications from the ground up for a startup with a team of four developers. Responsible for merge conflict resolution."
          href="/experience/alphabag"
          image={alphabagThumbnail}
          eagerLoadImage
        />
      </Section>

      <Section title="Selected Work">
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase • Project at Alphabag"
          description="A fully fledged custom student management system. Helped manage the records of over 100 students."
          href="/projects/student-management-system"
          image={smsThumbnail}
        />
        <Card
          title="Avatar Creator"
          subtitle="NextJS • Project at Alphabag"
          description="Helped design the and build the interface from scratch. Includes image exporting features."
          href="/projects/avatar-creator"
          image={avatarCreatorThumbnail}
        />
        <Card
          title="Streamlined Notes"
          subtitle="NextJS • Supabase • Personal Project"
          description="A custom note-editor built from scratch without AI assistance. Includes Google OAuth and a backend for saving notes."
          href="/projects/avatar-creator"
          image={avatarCreatorThumbnail}
        />
      </Section>

      <Section title="Competitions">
        <Card
          title="Mini ROV Competition"
          subtitle="Arduino • C++"
          description="Designed a robot that could move underwater, given motors and an Arduino chip."
          image={miniRovCompetitionThumbnail}
        />
        <Card
          title="VEX V5 24-25"
          subtitle="VEXcode"
          description="Built a robot that can pick up rings and place them on stakes. Programmed the logic for the movements using VEXcode."
          image={vexV5CompetitionThumbnail}
        />
      </Section>
    </>
  );
}
