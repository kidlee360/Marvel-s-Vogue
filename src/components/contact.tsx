import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css';



export default function Contact(){
    return(
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
    );
}