import { useState, useEffect } from "react";
import { Navigation } from "./Components/navigation";
import { Header } from "./Components/header";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Schools }  from "./Components/Schools";
import { Tuition } from "./Components/Tuition";
import JsonData from "./data/data.json";
import { Contact } from "./Components/Contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [Know_Academic, setKnow_Academic] = useState({});
  useEffect(() => {
    setKnow_Academic(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={Know_Academic.Header} />
        <About data={Know_Academic.About} />
      <Services data={Know_Academic.Services} />
      <Schools />
      <Tuition data={Know_Academic.Tuition} />
      <Contact data={Know_Academic.Contact} />
    </div>
  );
};

export default App;