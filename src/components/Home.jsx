import logo from "../assets/Group 29.png";
import arrowDown from "../assets/Group 30.png";
import backgroundDsc from "../assets/landing image.png";
import backgroundMob from "../assets/BG image.png";
import useWindowWidth from '../Hooks'
import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState('Websites');
  const windowWidth = useWindowWidth()

  useEffect(() => {
    switch (text) {
      case 'Websites':
        setTimeout(() => {
          setText("Apps")
        }, 4000);
        
        break;
      case 'Apps':
        setTimeout(() => {
          setText("API")
        }, 4000);
        
        break;
      case 'API':
        setTimeout(() => {
          setText("Websites")
        }, 4000);
        
        break;
    
      default:
        break;
    }
    
    return
  }, [text]);
  
  return (
    <div className="homeContainer">
      <img src={logo} height={32} className='logo' alt="" />
      <div className="homeContent" >
          <img src={windowWidth > 640 ? backgroundDsc: backgroundMob} alt="" className="backgroundImg"/>

        <h1>Automatically turn your code
          <br />into auto-scalable <br style={{display:windowWidth < 780 ? 'block': 'none'}}/> <span><b>{text}</b></span> </h1>
        <p>
          Leave hassle of deployment and infrastructure management behind
        </p>

        <button>Join the waitlist</button>

        <img src={arrowDown} alt="" className="arrowDown" />
      </div>
    </div>
  )
};

export default Home;
