import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import './App.css';
import Card from './card.tsx';

export default function Home(){
  const imageNames =["image (1).jpg", "image (2).jpg", "image (3).jpg", "image (4).jpg", "image (5).jpg", "image (6).jpg", "image (7).jpg", "image (8).jpg", "image (9).jpg", "image (10).jpg", "image (11).jpg", "image (12).jpg", "image (13).jpg", "image (14).jpg", "image (15).jpg", "image (16).jpg", "image (17).jpg", "image (18).jpg", "image (19).jpg", "image (20).jpg", "image (21).jpg", "image (22).jpg", "image (23).jpg", "image (24).jpg", "image (25).jpg", "image (26).jpg", "image (27).jpg", "image (28).jpg", "image (29).jpg", "image (30).jpg", "image (31).jpg", "image (32).jpg", "image (33).jpg", "image (34).jpg", "image (35).jpg", "image (36).jpg", "image (37).jpg", "image (38).jpg", "image (39).jpg", "image (40).jpg", "image (41).jpg", "image (42).jpg", "image (43).jpg", "image (44).jpg", "image (45).jpg", "image (46).jpg", "image (47).jpg", "image (48).jpg", "image (49).jpg", "image (50).jpg"];
  const row1 = imageNames.slice(0, 15);
  const row2 = imageNames.slice(15, 30);
  const row3 = imageNames.slice(30, 50);

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
      duration: 1.5,
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
          <div className='hanger-scene'>
            
          <div className='carousel-container'>
            <div className='carousel-axis carousel-axis-r'>
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`post-${index}`} className='static-hanger-post' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}
            {/* We need 15 arms for Row 1 (15 cards) */}
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`arm-${index}`} className='hanger-arm' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}    
            {row1.map((image, index) => {
              return(<Card key={index} background={image} style={{'--i': index, '--total': row1.length} as React.CSSProperties} />)
            })}
            </div>
          </div>

          <div className='carousel-container'>
            <div className='carousel-axis carousel-axis-l'>
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`post-${index}`} className='static-hanger-post' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}
            {/* We need 15 arms for Row 1 (15 cards) */}
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`arm-${index}`} className='hanger-arm' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}
            {row2.map((image, index) => {
              return(<Card key={index} background={image} style={{'--i': index, '--total': row1.length} as React.CSSProperties} />)
            })}
            </div>
          </div>

          <div className='carousel-container'>
            <div className='carousel-axis carousel-axis-r'>
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`post-${index}`} className='static-hanger-post' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}
            {/* We need 15 arms for Row 1 (15 cards) */}
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={`arm-${index}`} className='hanger-arm' style={{
                '--i': index,
                '--total': 15,
              } as React.CSSProperties}></div>
            ))}
            {row3.map((image, index) => {
              return(<Card key={index} background={image} style={{'--i': index, '--total': row1.length} as React.CSSProperties} />)
            })}
            </div>
          </div>
          </div>
        </div>
        <div>
          <h2>Contact Me</h2>
          <div className='links'>
            <a href="http://wa.me/2349073788434?text=Hello%2C%20I%27m%20here%20from%20your%20portfolio%20website" target="_blank" rel="noopener noreferrer">
               <WhatsAppIcon style={{width:"50px", height: "50px"}} />
            </a>
            <a href="http://wa.me/2349073788434?text=Hello%2C%20I%27m%20here%20from%20your%20portfolio%20website" target="_blank" rel="noopener noreferrer">
               <InstagramIcon style={{width:"50px", height: "50px"}} />
            </a>
            <a href="http://wa.me/2349073788434?text=Hello%2C%20I%27m%20here%20from%20your%20portfolio%20website" target="_blank" rel="noopener noreferrer">
               <LinkedInIcon style={{width:"50px", height: "50px"}} />
            </a>
          </div>
          
        </div>
      </div>
  )
}