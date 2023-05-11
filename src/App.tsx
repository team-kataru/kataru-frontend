import { Fragment } from "react";
import Hero from "./components/Hero";
import "./sass/main.scss";

function App() {
  return (
    <Fragment>
      {/* LP - Hero Section */}
      <Hero />

      <section id="about-scroll" className="about">
        <div>HOW DOES IT WORK?</div>
      </section>
    </Fragment>
  );
}

export default App;
