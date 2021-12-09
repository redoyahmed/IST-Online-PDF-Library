import React from "react";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default Home;
