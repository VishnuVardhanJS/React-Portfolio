import React, { useRef } from 'react'
import './index.css'
import HeyText from './components/HeyText';
import StarsBg from './components/StarsBg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, 
  FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

  // document.addEventListener("mousemove", (event) => {
  //   let mousex = event.clientX; // Gets Mouse X
  //   let mousey = event.clientY; // Gets Mouse Y
  //   console.log([mousex, mousey]); // Prints data
  // });

export default function App() {
  return (
    <ScrollContainer>
      
       <ScrollPage key={0}>
          <Animator>
            <div className='homeText'>
              <HeyText />
            </div>
          </Animator>
          <div className='down-arrow' />
      </ScrollPage>

      <ScrollPage key={1}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", color: "#fff" }} >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <StarsBg />
    </ScrollContainer> 
  )
}
