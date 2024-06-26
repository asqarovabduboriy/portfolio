import React from "react";
import About from "../../components/about/About";
import Project from "../../components/project/Project";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <>
      <div className="banner">
      <div className="container text-center">
        <h1>HEY, I'M ABDUBORIY</h1>
        <p>
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <button>Project</button>
      </div>
      </div>

      <About/>
      <Project/>
      <Contact/>
    </>
  );
};

export default Home;
