import { useRef, useState } from "react";

// using custom hook, but react-intersection-observer library also exists
import useObserver from "../../hooks/useObserver";

type Props = {
  key: number;
  title: { text: string; color: string }[];
  img: string;
  text: string;
};

function FeaturesCard({ title, img, text }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeVisible = () => setIsVisible(true);
  useObserver(cardRef, makeVisible, { rootMargin: "-120px 0px" });

  const classes = `card__cell ${isVisible ? "fade-in-on-scroll" : ""}`;

  // inline dynamic property (includes image url)
  // note, cannot use SASS variables here
  const imageStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(138, 43, 226, 0.2), rgba(0, 127, 255, 0.4)), url(${
      process.env.PUBLIC_URL + img
    })`,
  };

  return (
    <div className="card">
      <div ref={cardRef} className={classes}>
        <h3 className="card__title">
          {title.map((word, index) => (
            <span key={index} style={{ color: word.color }}>
              {word.text.toUpperCase()}
            </span>
          ))}
        </h3>
        <div className="card__content">
          <p className="card__content--text">{text}</p>
          <div className="card__content--img" style={imageStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
