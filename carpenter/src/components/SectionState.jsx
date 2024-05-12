import React, { useState } from 'react';
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import NavBar from './NavBar'

const {Button1, Button2, Button3} = NavBar

function SectionState () {
  
  
  const [componentRender, setComponentRender] = useState(<Home/>);
  
  
    const Button1 = () => {
    setComponentRender(<Home/>);
  };

  const Button2 = () => {
    setComponentRender(<AboutUs/>);
  };

  const Button3 = () => {
    setComponentRender(<Service/>);
  };

  return (
    <div>
      {componentRender}
    </div>
  );
};

export default SectionState;
