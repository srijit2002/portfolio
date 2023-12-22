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
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </section>
  );
};
