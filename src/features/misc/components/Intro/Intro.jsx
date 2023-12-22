import "./Intro.css";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__title">
        <h1 className="intro__heading">
          <span className="hider"> Hi I am </span>
        </h1>
        <h1 className="intro__heading">
          <span className="hider"> Srijit </span>
        </h1>
      </div>
      <p className="intro__para">
        Hello, I&apos;m Srijit Mondal, a computer science student with a deep
        passion for operating systems, database internals, computer networks,
        data structures and algorithms. Currently pursuing my bachelor&apos;s
        degree in computer science at{" "}
        <a href="https://www.iiests.ac.in/" target="_blank" rel="noreferrer">
          IIEST
        </a>
        .
      </p>
    </section>
  );
};
