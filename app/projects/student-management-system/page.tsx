import ArticleLayout from "@/components/article-layout";
import TintedImage from "@/components/tinted-image";
import receiptGeneratorIamge from "@/public/images/alphabag-sms/receipt-generator.jpg";
import freeformImage from "@/public/images/alphabag/alphabag-6.jpg";

export default function Page() {
  return (
    <ArticleLayout
      title="Student Management System"
      subtitle="NextJS • Firebase • Project at Alphabag"
    >
      <h2>Overview</h2>
      <p>
        Three developers and I built a student management system using Next.js.
        The main purpose of the app is to manage the timetables of students
        enrolled in{" "}
        <a href="https://www.siuroma.com/kids/about-us" target="_blank">
          Siuroma Kids
        </a>{" "}
        classes. This app was essential to the center's success as they
        previously relied on a person manually tracking the schedules of
        everyone, which was inefficient. The system we built automated this
        process, allowing the learning center to operate at a larger capacity.
      </p>
      <p>
        On top of timetable features, the app also handled important features
        such as enrollment, handling requests to reschedule classes, and
        generating custom receipts.
      </p>
      <h2>My Contributions</h2>
      <h3>Handling Merge Conflicts</h3>
      <figure>
        <TintedImage
          src={freeformImage}
          alt="Brainstorming course code naming with freeform"
        />
        <figcaption>
          Me presenting a proposed way to name course codes. I created diagrams
          using Freeform to convey ideas visually.
        </figcaption>
      </figure>
      <p>
        With a project of this scale, merge conflicts were a frequent challenge.
        This was especially the case as all of us needed to connect to the
        backend at different times and in different ways. Because of this,
        having a solid backend was an utmost priority.
      </p>
      <p>
        We held multiple meetings to discuss about how the backend should be
        constructed. We chose Firebase, as it was relatively easier to build on
        compared to other options. We also unified the naming of Firebase
        documents, course codes, and keys.
      </p>

      <h3>Receipt Generator</h3>
      <figure>
        <TintedImage src={receiptGeneratorIamge} alt="Receipt generator" />
        <figcaption>
          Screenshot of the receipt generator interface. The generated receipt
          is custom-designed with branding, and all information is generated at
          the click of a button.
        </figcaption>
      </figure>
      <p>
        I built the custom receipt generator for this project. Prior to this
        receipt generator being created, Figma was used to create the receipts
        manually. The app I built allowed a user to type a student's code, and
        it automatically fetches the student's timetable and any additional
        information and completes the receipt, ready to export as a PDF. This
        generator was built in a react component, making it so that merging it
        with the main codebase was relatively simple.
      </p>
      <p>
        From a technical perspective, implementing this generator was quite
        challenging as it had to connect to the backend to fetch student data
        given a student code. While working on this project, I developed a
        deeper understanding of fetching data from a backend. This project
        specifically used Firebase as the backend, so I had hands-on experience
        with CRUD operations on Firebase documents.
      </p>
      <p></p>
    </ArticleLayout>
  );
}
