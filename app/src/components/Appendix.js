import React from "react";

const Appendix = () => {
  // const myRef = useRef(null); ?

  /* const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }; */

  const scrollTo = (id, center = false) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: center ? "center" : "start",
      });
    } else {
      console.log("section not found, got: ", section);
    }
  };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-link">
          <button onClick={() => scrollTo("#About", true)}>
            About This Page
          </button>
        </li>
        <li className="nav-link">
          <button onClick={() => scrollTo("#Softmax")}>Softmax</button>
        </li>
        <li className="nav-link">
          <button onClick={() => scrollTo("#SVM")}>SVM</button>
        </li>
        <li className="nav-link">
          <button onClick={() => scrollTo("#Random-Forest")}>
            Random Forest
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Appendix;
