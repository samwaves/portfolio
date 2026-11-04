import ArticleLayout from "@/components/article-layout";
import TintedImage from "@/components/tinted-image";
import randomImage from "@/public/images/alphabag/alphabag-1.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <ArticleLayout
        title="Software Engineering Intern"
        subtitle="Alphabag Limited • Winter 2025"
      >
        <h2>Overview</h2>
        <p>
          Three interns and I built two web apps in a one-month period, namely a
          student management system, and an avatar creator. These two apps were
          used to support a children's learning center named{" "}
          <a href="https://www.siuroma.com/kids/about-us" target="_blank">
            Siuroma Kids
          </a>
          .
        </p>
        <h2>My Contributions</h2>
        <figure>
          <TintedImage src={randomImage} alt="alt" />

          <figcaption>
            Me working at a whiteboard, detailing the backend infrastructure for
            the student management system. We were discussing the best way
            course codes should be named.
          </figcaption>
        </figure>
        <p>
          During the internship, I helped plan the backend infrastructure for
          our{" "}
          <Link href="/projects/student-management-system">
            student management system
          </Link>{" "}
          project. I planned out the naming system for course codes, and also
          helped with the the implementation of how we would connect the
          frontend to the backend. Since we were a small startup, I received
          guidance directly from the CEO as well.
        </p>
        <p>
          For both projects, a common issue that arose in a four-developer team
          was merge conflicts. Since I had prior experience with Git, I was able
          to use my knowledge to help the team handle merge conflicts.
        </p>
        <h2>Student Management System</h2>
        <p>
          The first project that we completed was a custom{" "}
          <Link href="/projects/student-management-system">
            student management system
          </Link>{" "}
          tailored for Siuroma Kids. By creating a website that could manage the
          timetable for each student, we optimized an inefficiency that the
          company had, where in the past, someone had to manually log the
          attendance of each student. We also designed a parent portal to
          accompany it, allowing parents to log in and send requests to modify
          class times if their child was not available for a certain class.
        </p>
        <h2>Avatar Creator</h2>
        <p>
          The second project that we did enhanced the learning experience of
          students in Siuroma Kids. We built an interactive{" "}
          <Link href="/projects/avatar-creator">avatar creator</Link>.
        </p>
        <h2>What I Learned</h2>
        <p>
          Since this was my first ever experience working at a company, I
          learned a lot about how developers operate in the real world. I
          participated in meetings, where we discussed how we would split the
          workload, and I had to code alongside coders with coding styles that
          were different to mine. Overall, I would say that this experience
          strengthened my confidence in being a developer that can ship real
          products.
        </p>
      </ArticleLayout>
    </>
  );
}
