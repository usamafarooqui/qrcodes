import React  from 'react'
import "../css/partners.css";
import coca from '../assests/images/coca.jpg';
import disney from '../assests/images/disney.jpg';
import google from '../assests/images/google.jpg';
import mercedes from '../assests/images/mercedes.jpg';
import hyundai from '../assests/images/hyundai.jpg';
import amazon from '../assests/images/amazon.png';
import ford from '../assests/images/ford.png';
import intel from '../assests/images/intel.png';
// mobile company logo

import vivo from "../assests/images/vivo.png"
import lenavo from "../assests/images/lenano.jpg"
import mi from "../assests/images/mi.png"
import nokia from "../assests/images/nokia.png"
import samsung from "../assests/images/samsung.jpg";



const Partners = () => {
  
  return (
    <>
     <div className="partners">
        <h3>Trusted By Our Favourite Companies</h3>
        <marquee behavior="" direction="right">
            <img src={coca} alt=""  />
            <img src={disney} alt=""  />
            <img src={hyundai} alt=""  />
            <img src={google} alt=""  />
            <img src={amazon} alt=""  />
            <img src={intel} alt=""  />
            <img src={ford} alt=""  />
            <img src={mercedes} alt=""  />
        </marquee>
        <marquee behavior="" direction="right">
            <img src={samsung} alt=""  />
            <img src={lenavo} alt=""  />
            <img src={nokia} alt=""  />
            <img src={mi} alt=""  />
            <img src={vivo} alt=""  />
            <img src={intel} alt=""  />
            <img src={ford} alt=""  />
        </marquee>
     </div>

  
    </>
  )
}

export default Partners