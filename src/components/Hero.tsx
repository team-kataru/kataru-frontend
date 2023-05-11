import { useState, useEffect } from "react";

const IMAGE_LIST = [
  "hero1.png",
  "hero2.png",
  "hero3.png",
  "hero4.png",
  "hero5.png",
  "hero6.png",
];
const TRANSITION_DELAY_MS = 5000;

function Hero() {
  // for slides
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  // Cycle indices while component mounted
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % IMAGE_LIST.length);
      setNextIndex((nextIndex + 1) % IMAGE_LIST.length);
    }, TRANSITION_DELAY_MS);

    return () => clearInterval(interval);
  }, [currentIndex, nextIndex]);

  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__nav">
          <a href="#about-scroll" className="hero__nav--link">
            Tell me more!
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
      <div className="hero__right">
        <div className="hero__gradient"></div>
        <div className="hero__slider">
          {IMAGE_LIST.map((imageUrl, index) => (
            <img
              key={index}
              className={`hero__slider--image ${
                index === currentIndex
                  ? "active"
                  : index === nextIndex
                  ? "next"
                  : "prev"
              }`}
              src={process.env.PUBLIC_URL + "/img/hero/" + imageUrl}
              alt="Slider"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
