import Section from "@/components/section";
import Card from "@/components/card";
import smsThumbnail from "@/public/images/alphabag-sms/timetable.jpg";
import avatarCreatorThumbnail from "@/public/images/alphabag-avatar-creator/export.jpg";

export default function Page() {
  return (
    <>
      <h1>Projects</h1>
      <Section title="Selected Work">
        <Card
          title="Student Management System"
          subtitle="NextJS • Firebase • Project at Alphabag"
          description="A fully fledged custom student management system. Helped manage the records of over 100 students."
          href="/projects/student-management-system"
          image={smsThumbnail}
          eagerLoadImage
        />
        <Card
          title="Avatar Creator"
          subtitle="NextJS • Project at Alphabag"
          description="A fully fledged custom student management system. Helped manage the records of over 100 students."
          href="/projects/avatar-creator"
          image={avatarCreatorThumbnail}
          eagerLoadImage
        />
      </Section>
    </>
  );
}
