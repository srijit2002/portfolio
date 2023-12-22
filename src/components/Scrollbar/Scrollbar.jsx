import { useEffect, useRef } from "react";
import "./Scrollbar.css"
export const Scrollbar = () => {
  const scrollbarRef = useRef(null);
  useEffect(() => {
    const scrollbar = scrollbarRef.current;
    let event = window.addEventListener("scroll", () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      scrollbar.style.top = progressHeight + "%";
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <div className="scrollbar">
      <div className="scrollbar__thumb" ref={scrollbarRef}></div>
    </div>
  );
};
