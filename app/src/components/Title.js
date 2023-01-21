import React from "react";

const Title = ({ image }) => {
  return (
    <>
      <img src={image} alt="..." id="title-logo"></img>
      <img src={image} alt="..." id="title-logo-2"></img>
      <header className="title">
        <h1 style={{ fontSize: "2.5rem" }}> Interactive ML Classifiers </h1>
        <p> A breif look at some simple classifier algorithms </p>
      </header>
    </>
  );
};

export default Title;

// TODO add the rotating style here
