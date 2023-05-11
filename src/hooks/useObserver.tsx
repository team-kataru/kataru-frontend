import { useEffect } from "react";

// Custom hook to instantiate an observer and assign an element, then trigger a callback once element is visible

// Types
type ref = React.MutableRefObject<Element | null>;
type callback = () => void;
type options = IntersectionObserverInit;

const useObserver = (ref: ref, callback: callback, options?: options) => {
  // Run on mounting and if dependencies change
  useEffect(() => {
    // Instantiate observer, entries at each intersection change
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Invoke callback if element visible
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Assign
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback, options]);
};

export default useObserver;
