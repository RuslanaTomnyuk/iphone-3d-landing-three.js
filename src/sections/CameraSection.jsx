import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import bgVideo from "src/assets/video/Scuba Diving - 699.mp4";
import bgVideo2 from "src/assets/video/Skate - 49791.mp4";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const Video2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;
  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: absolute;
  top: 0;
  right: 0;
  
  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  
  & > *:nth-child(3) {
    margin-left: 12rem;
  }
  
  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`;

const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 5;
  text-transform: capitalize;
  
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;

const CameraSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let videoElem = videoRef.current;
    let video2Elem = videoRef2.current;

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
      },
    })
      .to(videoElem, {scale: 0.3}, "key1")
      .to(video2Elem, {scale: 0.6}, "key1");

    elements("h1")
      .forEach(el =>
        t2.fromTo(
          el,
          {
            scrollTrigger: {
              trigger: Elem,
              start: "top top",
              end: `bottom bottom`,
              scrub: 1,
            },
            x: 100,
            opacity: 0,
          },
    {
             x: 0,
             opacity: 1,
           }
        ));

    return () => {
      if (t2) t2.kill();
    };
  },[]);

  return (
    <Section ref={sectionRef}>
        <Video ref={videoRef} src={bgVideo} typeof="video/mp4" autoPlay muted loop />
        <Video2 ref={videoRef2} src={bgVideo2} typeof="video/mp4" autoPlay muted loop />
      <TitleContainer ref={titleRef}>
        <Title>Ready</Title>
        <Title>Steady</Title>
        <Title>Action</Title>
      </TitleContainer>
    </Section>
  )
}
export default CameraSection
