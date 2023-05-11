import { useRef, useState } from "react";
import useObserver from "../../hooks/useObserver";

function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Invoke custom hook to mount observer, calling makeVisible when element intersects
  const makeVisible = () => setVisible(true);
  useObserver(gridRef, makeVisible, { rootMargin: "-120px 0px" });

  return (
    // id for smooth-scrolling link
    <section id="about-scroll" className="features">
      <h2 className="features__title">HOW DOES IT WORK?</h2>

      <div
        ref={gridRef}
        className={`features__grid ${visible ? "fade-in" : ""}`}
      >
        <div className="features__grid--item">Row 1 Left</div>
        <div className="features__grid--item">Row 1 Right</div>
        <div className="features__grid--item">Row 2 Left</div>
        <div className="features__grid--item">Row 2 Right</div>
        <div className="features__grid--item">Row 3 Left</div>
        <div className="features__grid--item">Row 3 Right</div>
      </div>
    </section>
  );
}

export default Features;
