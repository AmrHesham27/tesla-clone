import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = ({ 
    title, 
    description, 
    leftBtnText, 
    rightBtnText, 
    backgroundImg, 
    setContent, 
    setOpacity,
    setSectionsInView,
}) => {

    const ref = useRef();

    useEffect(() => {
        const scrollHandler = () => {
            const client = ref.current.getBoundingClientRect();
            const topPercent = Math.abs(client.top / client.height);

            if (topPercent < 0.5 && topPercent >= 0) {
                setContent({title, description, leftBtnText, rightBtnText})
                setOpacity(100 - (topPercent*100))
            };
        };

        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [title, description, leftBtnText, rightBtnText, setContent, setOpacity]);

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

    return (
        <Bacground bgImage={backgroundImg} ref={ref} />
    )
}

export default Section

/** background-size: cover => cover the conatiner (can be stretched or not fully visible) */

const Bacground = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100.01vh;
    background-size: cover;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
