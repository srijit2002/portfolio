import "./PageLoader.css";
import { useState, useEffect } from "react";

export const PageLoader = ({ onLoad }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setHasLoaded(true);
      onLoad();
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [onLoad]);
  return (
    <section className={`pageloader ${hasLoaded ? "clip-path-opener" : ""}`}>
      <main className="pageloader_content">
        <h2 className="pageloader_title">
          Making Computers Do Things Since 2002
        </h2>
        <h3 className="pageloader_subtitle">They Still Don&apos;t Listen.</h3>
      </main>
    </section>
  );
};
