import { useEffect } from "react";

// Types
type ref = React.MutableRefObject<Element | null>;
type callback = () => void;
type options = IntersectionObserverInit;

// Custom hook to instantiate an observer and assign an element, then trigger a callback once element is visible
const useObserver = (ref: ref, callback: callback, options?: options) => {
  // Run code on mounting
  useEffect(() => {
    // Instantiate an observer, with a callback that is triggered at intersection change (adjusted by options)
    // Our callback is triggered when observed element intersects
    const observer = new IntersectionObserver((entries) => {
      // Loop tracked elements (1 length array if one element)
      entries.forEach((entry) => {
        // Invoke callback if element visible
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Assign observer if ref exists
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
