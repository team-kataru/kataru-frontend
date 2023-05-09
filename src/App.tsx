import { useState, useEffect, Fragment } from "react";
import "./sass/main.scss";

// Hero images
import image1 from "./img/hero/hero1.png";
import image2 from "./img/hero/hero2.png";
import image3 from "./img/hero/hero3.png";
import image4 from "./img/hero/hero4.png";
import image5 from "./img/hero/hero5.png";
import image6 from "./img/hero/hero6.png";

function App() {
  const [currentImg, setCurrentImg] = useState({ index: 0, isLoaded: true });

  // Array of images to loop
  const images = [image1, image2, image3, image4, image5, image6];

  // PRELOAD IMAGES
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  // Every 5s, update index and set isLoaded to false
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => {
        const nextIndex =
          currentImg.index === images.length - 1 ? 0 : currentImg.index + 1;

        return { index: nextIndex, isLoaded: false };
      });
    }, 8000);
    // clear on unmount
    return () => clearInterval(interval);
  }, []);

  // Once loaded, then set isLoaded to 'true' to add class for animation
  useEffect(() => {
    const img = new Image();
    img.src = images[currentImg.index];
    img.onload = () => {
      setCurrentImg((currentImg) => {
        // set isLoaded to true
        return { index: currentImg.index, isLoaded: true };
      });
    };
    // TODO check dependency array here...
  }, [currentImg.index, images]);

  return (
    <Fragment>
      <section className="hero">
        <div className="hero__left">
          <div className="hero__nav">
            <a href="#" className="hero__nav--link">
              Sign me up!
            </a>
          </div>
          <div className="hero__main">
            <h1 className="hero__heading-primary">
              <span className="hero__heading-primary--main">Kataru::</span>
              <span className="hero__heading-primary--sub">
                Create <span className="u-highlight-2">your</span> masterpiece
              </span>
            </h1>
            <h2 className="hero__heading-secondary">
              &rarr; One prompt at a time
            </h2>
          </div>
          <div className="hero__detail">
            <p className="hero__detail--text">
              You are full of beautiful stories. We present hand-curated,
              story-driven prompts to help you hone your craft and create your
              best work. Simply choose your favourite genre, and let your
              imagination run wild!
            </p>
          </div>
        </div>
        <div
          className={`hero__right ${
            currentImg.isLoaded ? "hero__right--loaded" : ""
          }`}
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(131, 56, 236, 0.4), rgba(58, 134, 255, 0.7)), url(${
              images[currentImg.index]
            })`,
          }}
        ></div>
      </section>
      <section className="about">
        <div>HOW DOES IT WORK?</div>
      </section>
    </Fragment>
  );
}

export default App;
