import { useEffect } from "react";

// Types
type ref = React.MutableRefObject<Element | null>;
type callback = () => void;
type options = IntersectionObserverInit;

// Custom hook to instantiate an observer and assign an element, then trigger a callback once element is visible
const useObserver = (ref: ref, callback: callback, options?: options) => {
  // Run code on mounting
  useEffect(() => {
    // Instantiate an observer
    // Takes callback and options; callback is triggered when observed element intersects
    const observer = new IntersectionObserver((entries) => {
      // Loop if tracking multiple elements
      entries.forEach((entry) => {
        // TODO delete log
        console.log(entry);

        // Call callback if element is visible
        if (entry.isIntersecting) {
          callback();
          // also stop observing once visible - TODO change this?
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // assign observer to ref, if ref exists
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up on hook unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback, options]);
};

export default useObserver;
