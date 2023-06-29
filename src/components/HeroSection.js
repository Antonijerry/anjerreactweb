import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME TO <span>AnJer</span></h1>
      <h2>FIRST REACT WEBSITE</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns btn-start' buttonStyle='btn-outline' buttonSize='btn-large'>GET STARTED</Button>
        <Button className='btns btn-watch' buttonStyle='btn-primary' buttonSize='btn-large'>
            WATCH NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
