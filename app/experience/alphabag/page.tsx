import ArticleLayout from "@/components/article-layout";
import TintedImage from "@/components/tinted-image";
import randomImage from "@/public/images/alphabag/alphabag-1.jpg";

export default function Page() {
  return (
    <>
      <ArticleLayout
        title="Software Engineering Intern"
        subtitle="Alphabag Limited • Winter 2025"
      >
        <h2>Overview</h2>
        <p>
          Me and four other interns were tasked with building two web apps in a
          one-month period, namely a student management system, and an avatar
          creator. Both of these apps would be used to support a children's
          learning center named{" "}
          <a href="https://www.siuroma.com/kids/about-us" target="_blank">
            Siuroma Kids
          </a>
          .
        </p>
        <h2>My Contributions</h2>
        <figure>
          <TintedImage src={randomImage} alt="alt" />

          <figcaption>
            Figure 1: The Golden Gate Bridge captured at golden hour, showcasing
            the low-lying San Francisco bay fog.
          </figcaption>
        </figure>
      </ArticleLayout>
    </>
  );
}
