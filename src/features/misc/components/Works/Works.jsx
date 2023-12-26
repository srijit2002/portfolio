import "./Works.css";
import { useEffect} from "react";
import { useAppContext } from "@/context/context";
import { Work } from "./Work";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "@/assests/Data/Projects";

export const Works = () => {
  const { setIsInsideALink } = useAppContext();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="projects flex--center" id="works">
      <h1 className="section_heading">[Works]</h1>
      {Projects?.map((work, index) => (
        <Work
          work={work}
          index={index}
          key={work.name}
          setIsInsideALink={setIsInsideALink}
        />
      ))}
    </main>
  );
};
