export const Work = ({ work, index, setIsInsideALink, ...rest }) => {
  return (
    <article
      {...rest}
      className={`project flex--center ${
        index % 2 == 0 ? "normal" : "alternate"
      }`}
    >
      <div
        className="project__details"
        data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
      >
        <h2 className="project__heading">{work.name}</h2>
        <p className="project__para">{work.description}</p>
      </div>
      <a
        data-aos="zoom-in"
        target="__blank"
        className="flex--center"
        href={work.url}
        onMouseEnter={() => setIsInsideALink(true)}
        onMouseLeave={() => setIsInsideALink(false)}
      >
        <img
          loading="lazy"
          className="project__img"
          src={work.image}
          alt="Cocktail Receipe Finder"
        />
      </a>
    </article>
  );
};
