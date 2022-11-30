import React, { useRef } from 'react';
import styled from 'styled-components';
import useDynamicContentChild from '../hooks/useDynamicContentChild';
import useScrollToNextSectionChild from '../hooks/useScrollToNextSectionChild';

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

    useDynamicContentChild(
      ref, 
      {title, description, leftBtnText, rightBtnText},
      setContent,
      setOpacity
    )

    useScrollToNextSectionChild(setSectionsInView, ref)

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
