import { useEffect, useRef, useState } from "react";
import "./Cursor.css";
import { useAppContext } from "@/context/context";

export const Cursor = () => {
  const [letters, setLetters] = useState([]);
  const { isInsideALink } = useAppContext();
  const cursorRef = useRef(null);

  useEffect(() => {
    let cursor = cursorRef.current;
    let moveEventListener = window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
    const text = "Click-to-see-more-";
    const splitLetters = text.split("").map((char, index) => ({
      char,
      rotate: index * 20,
    }));
    setLetters(splitLetters);
    return () => {
      window.removeEventListener("mousemove", moveEventListener);
    };
  }, []);

  return (
    <div className={isInsideALink ? "pointer" : "cursor"} ref={cursorRef}>
      {isInsideALink && (
        <h1 className="pointer__text">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ transform: `rotate(${letter.rotate}deg)` }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
};
