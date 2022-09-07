import React from "react";
import "./home.css"
import { Main, Sidebar } from "../../components";

const Home = () => {
  return (
    <section className="container">
      <div className="wrapper home-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-bar">
          <Main />
        </div>
      </div>
    </section>
  );
};

export { Home };
