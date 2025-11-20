import { useState, useRef, useEffect} from 'react';
import './App.css'; 
import Portal from './portal'; // <-- Import the new Portal component
import { CSSProperties } from 'react'; // Optional: for strict CSS style typing

interface CardProps {
  background: string;
  style?: CSSProperties;
}

export default function Card(props: CardProps) {

    const BASE_WIDTH = 100;
    const BASE_HEIGHT = 150;
    
    const [click, setClick] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleWhatsappClick = (event: React.MouseEvent) => {
        // Prevents the click from bubbling up to the card's main handleClick function
        event.stopPropagation(); 
        
        const baseUrl = window.location.origin;
        const imagePath = `/pictures/${props.background}`;
        const fullImageUrl = `${baseUrl}${imagePath}`;

        const message = `Hello! I'm interested in the design shown here: ${fullImageUrl}`;
        const encodedMessage = encodeURIComponent(message);
        
        const YOUR_NUMBER = '2349073788434'; 
        
        const whatsappUrl = `https://wa.me/${YOUR_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank'); // Opens link in a new tab
    };
    
    function handleClick() {
      setClick(true)
    };
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setClick(false);
                event.stopPropagation;
            }
        }

        //don't quite understand why the event listener below was added and 
        //then removed but it seems like a crucial logic to prevent errors
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cardRef]);
    

    const enlargedStyle: CSSProperties = {
        // --- Positioning and Centering ---
        position: 'fixed', // Now truly fixed relative to the viewport
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99999, // Use an extremely high z-index to guarantee visibility
        
        // --- Sizing ---
        width: `${BASE_WIDTH * 3}px`,
        height: `${BASE_HEIGHT * 3}px`,
        transition: 'all 0.3s ease-in-out',
        
        // Inherited styles
        backgroundImage: `url("/pictures/${props.background}")`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
    };


    // Define the style for the default (relative) state
    const defaultStyle: CSSProperties = {
        transition: 'width 0.3s ease-in-out',
        backgroundImage: `url("/pictures/${props.background}")`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
    };

    // The component logic
    const cardElement = (
        <div 
            ref={cardRef}
            className='card' 
            style={click ? enlargedStyle : {...defaultStyle, ...props.style}} 
            onClick={handleClick} 
        >
            <div style={{display: click? '': 'none'}}>
                <h3>Like the design?</h3>
                <h3>Contact the designer</h3>
                <button onClick={handleWhatsappClick}>Contact Me</button>
            </div>
        </div>
    );

    // If clicked, render via Portal. Otherwise, render normally.
    if (click) {
      return <Portal>{cardElement}</Portal>;
    }

    return cardElement; // Render normally in the scrolling container
}