import { Fragment } from "react";
import Hero from "./components/lp/Hero";
import "./sass/main.scss";
import Features from "./components/lp/Features";

function App() {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default App;
