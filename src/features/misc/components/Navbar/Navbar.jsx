export const Navbar = () => {
  return (
    <header className="header opener">
      <nav className="navbar opener">
        <ul>
          <li>
            <a href="#works">
              <h3>
                <span className="hider up-slider">Projects</span>
              </h3>
            </a>
          </li>
          <li>
            <a href="#hire">
              <h3>
                <span className="hider up-slider">Hire Me</span>
              </h3>
            </a>
          </li>
        </ul>
      </nav>

      <ul className="short__links">
        <li>
          <a href="mailto: srijitm906@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a target="__blank" href="https://github.com/srijit2002">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};
