import "./Skills.css";

export const Skills = () => {
  const skills = [
    "Html",
    "Css",
    "Javscript",
    "React Js",
    "Node Js",
    "Express Js",
    "Firebase",
    "Scss",
    "MongoDB",
    "DBMS",
    "Computer Networks",
    "Operating Systems",
    "Git/Github",
    "Java",
    "C++",
    "Data Structures",
    "Algorithm",
  ];
  return (
    <section className="skills">
      <h2 className="skills_heading">Skills</h2>
      <section className="skills_items" data-aos="fade-down">
        {skills.map((skill) => (
          <article key={skill} className="skills_item" >
            {skill}
          </article>
        ))}
      </section>
    </section>
  );
};
