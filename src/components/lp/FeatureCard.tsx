import { useRef, useState } from "react";

// Using custom hook, but react-intersection-observer library also exists
import useObserver from "../../hooks/useObserver";

function FeatureCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeVisible = () => setIsVisible(true);
  useObserver(cardRef, makeVisible, { rootMargin: "-120px 0px" });

  return (
    <div className="card">
      <div
        ref={cardRef}
        className={`card__cell ${isVisible ? "fade-in-on-scroll" : ""}`}
      >
        This is a Features Card
      </div>
    </div>
  );
}

export default FeatureCard;
