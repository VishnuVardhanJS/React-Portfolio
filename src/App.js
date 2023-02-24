import React, { useRef, useEffect, useContext } from 'react'
import './index.css'
import HeyText from './components/HeyText';
import StarsBg from './components/StarsBg';
import {
  Animator, ScrollContainer, ScrollPage, Move, Sticky, FadeIn, batch, Fade
} from "react-scroll-motion";
import "animate.css/animate.min.css";
import { setStates } from './contexts/context';
import FlipNumbers from "react-flip-numbers";
import Cards from './components/Cards';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

const FadeUp = batch(Fade(), Move(), Sticky());

export default function App() {

  const { population, FetchPopulation, setMousePos, mousePos } = useContext(setStates)

  useEffect(() => {
    const interval = setInterval(() => {
      FetchPopulation()
    }, 1000);
    return () => clearInterval(interval);
  }, [FetchPopulation])


  return (
    <div>
      <StarsBg />
      <ScrollContainer>
        <ScrollPage key={0}>

          <div className='homeText'>
            <HeyText />
          </div>
          <div className='down-arrow' />
        </ScrollPage>

        <ScrollPage key={1}>
          <div className='nameContainer'>
            <span style={{ fontSize: "50px", color: '#FCD900' }}>
              <Animator animation={FadeUp}>{
                <div className='FlexText'>
                  <FlipNumbers
                    height={40}
                    width={40}
                    color="white"
                    background="black"
                    play
                    perspective={400}
                    numbers={'Among' + String(population + 'People.')}
                  />
                  Why Choose Me?
                  <div className='stars_pg_2'>
                    <StarsBg />
                  </div>
                  <div className='CardsContainer'>
                    <Cards />
                  </div>

                </div>
              }</Animator>

            </span>
          </div>
          <div className='down-arrow' />
        </ScrollPage>
      </ScrollContainer>

    </div>
  )
}
