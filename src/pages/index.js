import * as React from "react";
import HomePage from "../components/Home";
import Markdown from "./markdown";
import SEO from "./SEO";

const IndexPage = () => {
  return (
    <main>
      <SEO title="Home" />
    <HomePage />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
