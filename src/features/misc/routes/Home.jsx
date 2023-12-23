import { Navbar } from "../components/Navbar/";
import { Intro } from "../components/Intro/";
import { Works } from "../components/Works";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills/";
import { Social } from "../components/Social";
import { Contact } from "../components/contact";
import { PageLoader } from "../components/PageLoader";

export const Home = () => {
  return (
    <>
      <PageLoader />
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Works />
      <Social />
      <Contact />
    </>
  );
};
