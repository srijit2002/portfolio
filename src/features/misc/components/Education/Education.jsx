import "./Education.css";
export const Education = () => {
  const educations = [
    {
      degree: "B.Tech Computer Science",
      school: "Indian Institute of Engineering Science and Technology",
      description:
        "Currently, I am pursuing my bachelor's degree in Computer Science from the Indian Institute of Engineering Science and Technology, where I maintain an 8.5 CGPA. During my bachelor's program, I have studied DBMS, computer networks, operating systems, data structures, algorithms, web development, and more.",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary",
      school: "Baduria L.M.S High School",
      description:
        "I completed my Higher Secondary Examination at Baduria L.M.S. High School, achieving 95.2% overall. In my core subjects, I scored 98 (out of 100) in Physics, Mathematics, and Chemistry.",
      year: "2020",
    },
  ];
  return (
    <section className="education">
      <h2 className="education_title">Education</h2>
      <section className="education_institutes">
        {educations.map((education) => (
          <article key={education.degree} className="education_institute" data-aos="fade-down">
            <div className="education_institute_header">
              <div className="education_institute_title">
                <h3>{education.degree}</h3>
                <h4>{education.year}</h4>
              </div>
              <h4 className="education_institute_school">{education.school}</h4>
            </div>
            <p className="education_institute_para">{education.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
