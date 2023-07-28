import React from "react";
import BlogPost from "../BlogPost";

// For this, I should essentially just implement a blog post page.
function AboutMe() {
  return (
    <BlogPost
      title="Osama Kawish"
      previewImgFile={"./about-bg.webp"}
      showAuthorImg={true}
      date={new Date("2021-08-01")}
    ></BlogPost>
  );
}

export default AboutMe;
