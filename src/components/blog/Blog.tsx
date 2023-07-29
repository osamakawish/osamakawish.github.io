// Blog.js
import React from "react";
import PartitionBlock from "./PartitionBlock";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="page-content">
      <h1>This is the Blog page.</h1>
      For now, just make a bunch of miniposts here. Later, we'll make a separate
      page for each post.
      <PartitionBlock />
    </div>
  );
}
