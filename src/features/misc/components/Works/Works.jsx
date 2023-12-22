import "./Works.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/context";
import { Work } from "./Work";
import Aos from "aos";
import "aos/dist/aos.css";

export const Works = () => {
  const { setIsInsideALink } = useAppContext();
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get("projects");
        setWorks(res.data || []);
      } catch (error) {
        console.log(error.stack);
      }
    };
    Aos.init({ duration: 1000 });
    fetchWorks();
  }, []);
  return (
    <main className="projects flex--center" id="works">
      <h1>Works</h1>
      {works?.map((work, index) => (
        <Work
          work={work}
          index={index}
          key={work._id}
          setIsInsideALink={setIsInsideALink}
        />
      ))}
    </main>
  );
};
