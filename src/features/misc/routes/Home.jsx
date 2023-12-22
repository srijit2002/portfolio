import { Navbar } from "../components/Navbar/";
import { Intro } from "../components/Intro/";
import { Works } from "../components/Works";
import { Education } from "../components/Education";
import { Skills } from "../components/Skills/";
import { Social } from "../components/Social";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Works />
      <Social />
    </>
  );
};
