import React, { useState } from 'react';
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import NavBar from './NavBar'


function SectionState () {
    
  
  const [componentRender, setComponentRender] = useState(<Home/>);

    const handleClickButton1 = () => {
    setComponentRender(<Home/>);
  };

  const handleClickButton2 = () => {
    setComponentRender(<AboutUs/>);
  };

  const handleClickButton3 = () => {
    setComponentRender(<Service/>);
  };

  return (
    <div>
      {componentRender}
    </div>
  );
};

export default SectionState;
