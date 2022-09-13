import * as React from "react";
import HomePage from "../components/Home";
import Markdown from "./markdown";

const IndexPage = () => {
  return (
    <main>
    <HomePage />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
