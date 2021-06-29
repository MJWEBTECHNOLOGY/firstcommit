import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Presentation from "./components/Presentation";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";
import Contact from "./components/Contact";
import Download from "./components/Download";


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes with all you need for daily life' button='Get the Button'/>
      <Presentation/>
      <Download image={aboutimage1} title='Download and get the App now' button='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
