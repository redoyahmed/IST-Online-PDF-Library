import React from "react";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";

function Home(props) {
  return (
    <div className="background">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default Home;