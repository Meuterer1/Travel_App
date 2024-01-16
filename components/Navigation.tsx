import React, { useEffect, useState } from 'react';
import MenuBigScreen from '../components/MenuBigScreen';
import MenuSmallScreen from '../components/MenuSmallScreen';


const Navigation: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  const isSmallScreen = windowWidth < 710;

  return (
    <>
      {isSmallScreen ? (<MenuSmallScreen />) : (<MenuBigScreen />)}
    </>
  
  )
}

export default Navigation
