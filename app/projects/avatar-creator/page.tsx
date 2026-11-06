import ArticleLayout from "@/components/article-layout";
import TintedImage from "@/components/tinted-image";
import canvasImage from "@/public/images/alphabag-avatar-creator/canvas.jpg";

export default function Page() {
  return (
    <ArticleLayout
      title="Avatar Creator"
      subtitle="NextJS • Project at Alphabag"
    >
      <h2>Overview</h2>
      <p>
        A team of four developers and I created a avatar creator that enhanced
        the learning experience of students in the{" "}
        <a href="https://www.siuroma.com/kids/about-us" target="_blank">
          Siuroma Kids
        </a>{" "}
        learning center.
      </p>
      <figure>
        <TintedImage
          src={canvasImage}
          alt="Screenshot of avatar creator"
          eagerLoadImage
        />
        <figcaption>Screenshot of the avatar creator.</figcaption>
      </figure>
      <h2>My Contributions</h2>
      <p>
        I designed the layout of the webpage, including how the creator
        progressed step by step using a tabbed layout.
      </p>
      <p>
        Since this project did not include any important workflow and was
        designed mainly for kids to play with, we chose to use AI to generate
        each tab of the website individually, which sped up the development
        process drastically.
      </p>
    </ArticleLayout>
  );
}
