import React from "react";
import BlogPost from "../BlogPost";

// For this, I should essentially just implement a blog post page.
function AboutMe() {
  return (
    <BlogPost
      title="Osama Kawish"
      previewImgFile={"./about-bg.webp"}
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
        I am currently developing an application in .Net/C# for animations and
        video editing with a clean UI for video editors who are beginners and
        intermediate in the field. The goal is to create a software that is not
        nearly as simple as Windows Movie Maker, but not as complex as Adobe
        Premiere Pro or Blender.
      </p>
      <p>
        This application uses the MVVM design pattern, uses the WPF framework,
        the Storyboard feature provided by WPF, and is beign developed in C# 11.
      </p>
    </BlogPost>
  );
}

export default AboutMe;
