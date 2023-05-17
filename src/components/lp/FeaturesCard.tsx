import { useRef, useState } from "react";

// using custom hook, but react-intersection-observer library also exists
import useObserver from "../../hooks/useObserver";

type Props = {
  key: number;
  title: string;
  img: string;
  list: string[];
};

function FeaturesCard({ title, img, list }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeVisible = () => setIsVisible(true);
  useObserver(cardRef, makeVisible, { rootMargin: "-120px 0px" });

  const classes = `card__cell ${isVisible ? "fade-in-on-scroll" : ""}`;

  // inline dynamic property (includes image url)
  // note, cannot use SASS variables here
  const imageStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(138, 43, 226, 0.4), rgba(0, 127, 255, 0.7)), url(${
      process.env.PUBLIC_URL + img
    })`,
  };

  return (
    <div className="card">
      <div ref={cardRef} className={classes}>
        <h3 className="card__title">{title.toUpperCase()}</h3>
        <div className="card__content">
          <ul className="card__content--list">
            {list.map((item, i) => (
              <li key={i} className="card__content--item">
                {item}
              </li>
            ))}
          </ul>
          <div className="card__content--img" style={imageStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
