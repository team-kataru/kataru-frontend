import { useRef, useState } from "react";

// Using custom hook, but react-intersection-observer library also exists
import useObserver from "../../hooks/useObserver";

type Props = {
  title: string;
  img: string;
  text: string;
};

function FeatureCard({ title, img, text }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeVisible = () => setIsVisible(true);
  useObserver(cardRef, makeVisible, { rootMargin: "-120px 0px" });

  const classes = `card__cell ${isVisible ? "fade-in-on-scroll" : ""}`;

  return (
    <div className="card">
      <div ref={cardRef} className={classes}>
        <h3 className="card__title">{title}</h3>
        <div className="card__content">
          <p>{text}</p>
          <img
            className="title__img"
            src={process.env.PUBLIC_URL + "/img/hero/hero1.png"}
            alt="Card Image"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
