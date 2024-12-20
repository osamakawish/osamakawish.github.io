import "./AboutMe.css";
import LinkButton from "../../LinkButton";
import { LINKS } from "../../../constants";

function AboutMe() {
  const DATE_UPDATED = new Date("2023-07-28");

  return (
    <>
      <div className="top-images">
        <img
          className="preview-img"
          src="/about-bg.webp"
          alt="night stars as a cover background"
        />
        <img
          className="osama-portrait"
          src="/osama.webp"
          alt="a portrait of me, Osama Kawish"
        />
      </div>
      <div className="post-content-flex" style={{ top: "240px" }}>
        <div className="post-content">
          <div className="header-content">
            <h1>Osama Kawish</h1>
            {DATE_UPDATED && (
              <p className="blog-date">{DATE_UPDATED.toDateString()}</p>
            )}
            <div className="about-links">{LinkButtons()}</div>
          </div>
          <div className="blog-children">
            <p>
              I am a proficient software developer who is fluent in .Net/C# and
              Python who graduated from University of Toronto with a Bachelor's
              of Science (Honours) in Mathematics and Computer Science in July
              2017. I made this web portfolio using HTML, CSS, TypeScript, and
              React. I can adapt quickly to new situations and I have a solid
              foundation in Computation theory and Software Design. I am deeply
              committed to creating efficient, tailored software solutions.
            </p>
            <p>
              While studying at the University of Toronto, I took courses in
              which I learned Python, Java, Software Design, Design Principles
              such as Agile/Scrum, and Version Control. My degree included
              courses in Mathematics in which I learned Calculus, Linear
              Algebra, and Discrete Mathematics. I also took courses in Computer
              Science in which I learned Data Structures, Algorithms, and
              Computation Theory.
            </p>
            <p>
              Since graduating, I have been working on a variety of projects and
              taught myself a diverse range of programming languages and
              frameworks. I have learned and built projects using C#, .Net,
              Python, React, TypeScript, HTML, CSS. I have also learned and used
              the following frameworks, which have simplified the process of
              creating user interfaces and desktop applications: Winforms, WPF,
              UWP.
            </p>
            <p>
              I am currently developing an application in .Net/C# for animations
              and video editing with a clean UI for video editors who are
              beginners and intermediate in the field. The goal is to create a
              software that is not nearly as simple as Windows Movie Maker, but
              not as complex as Adobe Premiere Pro or Blender. The application
              uses the MVVM design pattern, uses the WPF framework, the
              Storyboard feature provided by WPF, and is being developed in C#
              11.
            </p>
            <p>
              I enjoy working with Graphics and Animations, as the Calculus and
              advanced mathematics is very enjoyable to implement. The problem
              solving in mathematical and physical scenarios is mentally
              engaging and entertaining.
            </p>
            <p>
              My future goals are to continue working on my application and to
              learn more about Machine Learning and AI. I prefer to build more
              useful and practical applications with my skills.
            </p>
          </div>
        </div>
        <div className="spacer-xl" />
      </div>
    </>
  );

  function LinkButtons() {
    return LINKS.map(([name, url]) => (
      <LinkButton key={name} name={name} url={url} />
    ));
  }
}

export default AboutMe;
