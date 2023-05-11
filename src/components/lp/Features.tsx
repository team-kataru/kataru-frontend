import { useRef, useState } from "react";
import useObserver from "../../hooks/useObserver";

function Features() {
  const leftCellRef = useRef<HTMLDivElement>(null);
  const rightCellRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // Invoke custom hook to mount observers, calling makeVisible when elements intersect
  const makeLeftVisible = () => setLeftVisible(true);
  const makeRightVisible = () => setRightVisible(true);
  const options = { rootMargin: "-120px 0px" };
  useObserver(leftCellRef, makeLeftVisible, options);
  useObserver(rightCellRef, makeRightVisible, options);

  return (
    // id for smooth-scrolling link
    <section id="about-scroll" className="features">
      <h2 className="features__title">HOW DOES IT WORK?</h2>
      <div className="features__grid">
        <div
          ref={leftCellRef}
          className={`features__grid--item ${leftVisible ? "fade-in" : ""}`}
        >
          Row 1 Left
        </div>
        <div className="features__grid--item">Row 1 Right</div>
        <div className="features__grid--item">Row 2 Left</div>
        <div
          ref={rightCellRef}
          className={`features__grid--item ${rightVisible ? "fade-in" : ""}`}
        >
          Row 2 Right
        </div>
      </div>
    </section>
  );
}

export default Features;
