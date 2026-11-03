import Card from "@/components/card";
import alphabagThumbnail from "@/public/images/alphabag/alphabag-1.jpg";

export default function Page() {
  return (
    <>
      <h1>Experience</h1>
      <Card
        title="Software Engineering Intern"
        subtitle="Alphabag Limited • Winter 2025"
        description="Wrote two applications from the ground up for a startup with a team of four developers. Responsible for merge conflict resolution."
        href="/experience/alphabag"
        image={alphabagThumbnail}
        eagerLoadImage
      />
    </>
  );
}
