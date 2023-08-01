import BlogPost from "../BlogPost";
import LinkButton from "../LinkButton";
import "./AboutMe.css";

// For this, I should essentially just implement a blog post page.
function AboutMe() {
  return (
    <BlogPost
      title="Osama Kawish"
      previewImgFile={"/about-bg.webp"}
      showAuthorImg={true}
      date={new Date("2023-07-28")}
    >
      <p>
        I am a proficient software developer who is fluent in .Net/C# and Python
        who graduated from University of Toronto with a Bachelor's of Science
        (Honours) in Mathematics and Computer Science in July 2017. I made this
        web portfolio using HTML, CSS, TypeScript, and React. I can adapt
        quickly to new situations and I have a solid foundation in Computation
        theory and Software Design. I am deeply committed to creating efficient,
        tailored software solutions.
      </p>
      <p>
        While studying at the University of Toronto, I took courses in which I
        learned Python, Java, Software Design, Design Principles such as
        Agile/Scrum, and Version Control. My degree included courses in
        Mathematics in which I learned Calculus, Linear Algebra, and Discrete
        Mathematics. I also took courses in Computer Science in which I learned
        Data Structures, Algorithms, and Computation Theory.
      </p>
      <p>
        Since graduating, I have been working on a variety of projects and
        taught myself a diverse range of programming languages and frameworks. I
        have learned and built projects using C#, .Net, Python, React,
        TypeScript, HTML, CSS. I have also learned and used the following
        frameworks, which have simplified the process of creating user
        interfaces and desktop applications: Winforms, WPF, UWP.
      </p>
      <p>
        I am currently developing an application in .Net/C# for animations and
        video editing with a clean UI for video editors who are beginners and
        intermediate in the field. The goal is to create a software that is not
        nearly as simple as Windows Movie Maker, but not as complex as Adobe
        Premiere Pro or Blender. The application uses the MVVM design pattern,
        uses the WPF framework, the Storyboard feature provided by WPF, and is
        being developed in C# 11.
      </p>
      <p>
        I enjoy working with Graphics and Animations, as the Calculus and
        advanced mathematics is very enjoyable to implement. The problem solving
        in mathematical and physical scenarios is mentally engaging and
        entertaining.
      </p>
      <p>
        My future goals are to continue working on my application and to learn
        more about Machine Learning and AI. I prefer to build more useful and
        practical applications with my skills.
      </p>
      <div className="about-links">
        <LinkButton url="mailto:osamakawish@gmail.com">Email</LinkButton>
        <LinkButton url="https://www.linkedin.com/in/osama-kawish-7b0232237/">
          LinkedIn
        </LinkButton>
        <LinkButton url="https://www.codewars.com/users/osamakawish">
          Codewars
        </LinkButton>
      </div>
    </BlogPost>
  );
}

export default AboutMe;
