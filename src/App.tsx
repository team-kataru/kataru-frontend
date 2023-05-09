import { useState, useEffect } from "react";
import "./sass/main.scss";

import doc from "./img/icons/doc.png";

// Hero images
import image1 from "./img/hero1.png";
import image2 from "./img/hero2.png";
import image3 from "./img/hero3.png";
import image4 from "./img/hero4.png";
import image5 from "./img/hero5.png";
import image6 from "./img/hero6.png";
import image7 from "./img/hero7.png";

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  // Array of images to loop
  const images = [image1, image2, image3, image4, image5, image6, image7];

  // To update current image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => {
        return currentImg === images.length - 1 ? 0 : currentImg + 1;
      });
    }, 5000);

    // clear interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__nav">
          <a href="#" className="hero__nav--link">
            Sign me up!
          </a>
          <img src={doc} alt="Image of Notebook" className="hero__nav--img" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            blanditiis quasi corporis fugit pariatur alias totam, dolor,
            possimus nostrum, at facilis? Officia vel voluptas laborum quae
            rerum tempore quam laboriosam?
          </p>
        </div>
      </div>
      <div
        className="hero__right"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(131, 56, 236, 0.4), rgba(58, 134, 255, 0.7)), url(${images[currentImg]})`,
        }}
      ></div>
    </section>
  );
}

export default App;
