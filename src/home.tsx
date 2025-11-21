import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import './App.css';
import Catalogue from './components/catalogue.tsx';
import Contact from './components/contact.tsx';
import UG from './components/UG.tsx';

export default function Home(){


  // Register GSAP plugins
  gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

  useGSAP(() => {
    const split = SplitText.create('.h1', {
        type: 'chars, words',
        charsClass: 'char++'
    });

    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      xPercent: "random([-100, 100])",
      rotation: "random(-30, 30)",
      autoAlpha: 0,
      stagger: {
          from: 'random',
          amount: 0.5
      },
      ease: 'back.out(1.7)',
      duration: 2.5,
    });

    // Animate the tagline spans
    gsap.from(".tagline-span", {
      autoAlpha: 0, // Fades in from invisible
      y: 20, // Slides up slightly
      stagger: 1.5, // Set stagger to 1 second
      delay: 5, // Start this animation 5 seconds after the component loads
      duration: 1.5, // Duration of the animation
    });

    // Animate each carousel as it scrolls into view
    gsap.utils.toArray<HTMLElement>(".carousel-axis").forEach(axis => {
    // Set the initial tilted state
      gsap.set(axis, { rotateX: -16 });
      gsap.from(axis, {
        rotateX: 0, // Start from 0 degrees
        duration: 3, // Animation duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: axis,
          start: "bottom 100%", 
          toggleActions: "play none none none", // Play the animation once and don't reverse it
        }
      });
    });

    // Return a cleanup function to revert the SplitText changes
    return () => split.revert();
  }, []); // Empty dependency array ensures this runs only once on mount.



  return (
      <div>
        <div className='header'>
            <video src="/efe's video.mp4" autoPlay muted className="video-background"></video>
          <h1 className='h1'><strong>MARVEL'S VOGUE</strong></h1>
          <div style={{zIndex: 1}}>
          <span className="tagline-span" style={{display: 'block', fontWeight: 'bold'}}>Made to measure,</span>
          <span className="tagline-span" style={{display: 'block', fontWeight: 'bold'}}>Made for you</span>
          </div>
        </div>
        <div className='catalogue'>
          <h2>Design Catalogue</h2>
          <Catalogue />
          
        </div>
        <Contact />
        
      </div>
  )
}