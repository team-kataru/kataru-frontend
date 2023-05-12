import { useRef, useState } from "react";
// Here using custom hook to monitor & react to intersection
// But note, 'react-intersection-observer' library also available
import useObserver from "../../hooks/useObserver";

function Features() {
  const leftCellRef = useRef<HTMLDivElement>(null);
  const rightCellRef = useRef<HTMLDivElement>(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const makeLeftVisible = () => setIsLeftVisible(true);
  const makeRightVisible = () => setIsRightVisible(true);
  // offset intersection by 120px vertically
  const options = { rootMargin: "-120px 0px" };
  useObserver(leftCellRef, makeLeftVisible, options);
  useObserver(rightCellRef, makeRightVisible, options);

  // To conditionally add animation class
  const leftScrollAnimate = `features__grid--item ${
    isLeftVisible ? "fade-in-on-scroll" : ""
  }`;
  const rightScrollAnimate = `features__grid--item ${
    isRightVisible ? "fade-in-on-scroll" : ""
  }`;

  // TODO export grid?
  return (
    // id for scrolling link
    <section id="about-scroll" className="features">
      <h2 className="features__title">HOW DOES IT WORK?</h2>
      <div className="features__grid">
        <div ref={leftCellRef} className={leftScrollAnimate}>
          Row 1 Left
        </div>
        <div className="features__grid--item">Row 1 Right</div>
        <div className="features__grid--item">Row 2 Left</div>
        <div ref={rightCellRef} className={rightScrollAnimate}>
          Row 2 Right
        </div>
      </div>
    </section>
  );
}

export default Features;
