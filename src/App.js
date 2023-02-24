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
import discord from './assets/Icons/discord.png'
import mail from './assets/Icons/mail.png'
import github from './assets/Icons/github.png'
import linkedin from './assets/Icons/linkedin.png'
import twitter from './assets/Icons/twitter.png'


const FadeUp = batch(Fade(), Move(), Sticky());

export default function App() {

  const { population, FetchPopulation, setMousePos, mousePos } = useContext(setStates)

  useEffect(() => {
    const interval = setInterval(() => {
      FetchPopulation()
    }, 1000);
    return () => clearInterval(interval);
  }, [FetchPopulation])

  function submitClick(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }


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

        <ScrollPage key={2}>
          <div className='nameContainer'>
            <span style={{ fontSize: "50px", color: '#FCD900' }}>
              <Animator animation={FadeUp}>{
                <div>
                  <div className='pepTalk'>
                    Pep Talk?.... Ping me
                  </div>
                  <div className='socialsContainer'>
                    <img src={github} className="icons" alt="GitHub" onClick={() => { submitClick("https://github.com/VishnuVardhanJS") }} />
                    <img src={discord} className="icons" alt="Discord" onClick={() => { submitClick("https://discordapp.com/users/484766045920296961") }} />
                    <img src={linkedin} className="icons" alt="LinkedIn" onClick={() => { submitClick("https://www.linkedin.com/in/vishnuvardhanjs/") }} />
                    <img src={twitter} className="icons" alt="Twitter" onClick={() => { submitClick("https://twitter.com/VishnuVardhanJS") }} />
                    <img src={mail} className="icons" alt="Mail" onClick={() => { submitClick("mailto:vishnuvardhanjs@proton.me") }} />

                  </div>
                  
                </div>
              }</Animator>
              <div className='stars_pg_3'>
                    <StarsBg />
              </div>
            </span>
          </div>

          <div className='down-arrow' />
        </ScrollPage>
      </ScrollContainer>

    </div>
  )
}
