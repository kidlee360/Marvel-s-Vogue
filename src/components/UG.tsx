import { useState } from 'react';
import '../App.css';


export default function UG(){
    const [click, setClick] = useState(false);`  `


    return(
        <div className='UG'>
            <h2>UG designs</h2>
            <h3>Truly bespoke</h3>
            <span>Want a website that speaks? <a href="">Hit me up</a></span>

        </div>
    )
}