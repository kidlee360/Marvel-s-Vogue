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
            <a href="https://www.instagram.com/marvels_vogue?igsh=MW9kMjVydGswcTNlaw==" target="_blank" rel="noopener noreferrer">
               <InstagramIcon style={{width:"50px", height: "50px"}} />
            </a>
            <a href="https://www.linkedin.com/in/efe-ajaifia-708815252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
               <LinkedInIcon style={{width:"50px", height: "50px"}} />
            </a>
          </div>
          
        </div>
    );
}