import { useEffect } from 'react'

function useScrollToNextSectionChild(setSectionsInView, ref) {
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {    
            if (entry.isIntersecting) {
              setSectionsInView(prevState => [...prevState, ref])
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => observer.disconnect()
      }, [ref, setSectionsInView]);
}

export default useScrollToNextSectionChild