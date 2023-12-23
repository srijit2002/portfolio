import { Navbar } from "../components/Navbar/";
import { Intro } from "../components/Intro/";
import { Works } from "../components/Works";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills/";
import { Social } from "../components/Social";
import { Contact } from "../components/contact";
import { PageLoader } from "../components/PageLoader";
import { useState } from "react";

export const Home = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const handleDelay = () => {
    window.setTimeout(() => setHasLoaded(true), 3500);
  };
  return (
    <>
      <PageLoader onLoad={handleDelay} />
      <Navbar hasLoaded={hasLoaded} />
      <Intro hasLoaded={hasLoaded} />
      <Education />
      <Skills />
      <Works />
      <Social />
      <Contact />
    </>
  );
};
