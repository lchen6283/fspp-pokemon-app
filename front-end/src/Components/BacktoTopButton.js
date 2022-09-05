import React from "react";
import { useState, useEffect } from "react";

export default function BacktoTopButton() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button onClick={scrollUp} id="myBtn" title="Go to top">
          ⇧
        </button>
      )}
    </div>
  );
}
