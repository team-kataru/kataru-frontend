import { useEffect } from "react";

// Custom hook to instantiate an observer and assign an element, then trigger a callback once element is visible

// Types
type ref = React.MutableRefObject<Element | null>;
type callback = () => void;
type options = IntersectionObserverInit;

const useObserver = (ref: ref, callback: callback, options?: options) => {
  useEffect(() => {
    // Instantiate observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Invoke callback if visible
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Assign ref to observer ()
    const currentRef = ref.current!;
    if (ref.current) {
      observer.observe(currentRef);
    }

    // Clean up
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, callback, options]);
};

export default useObserver;
