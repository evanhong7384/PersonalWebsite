
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import gmail from '../../public/Gmail.png'
import linkedin from "../../public/LI.png"
import github from "../../public/GH.png"
import hands from "../../public/hands_trans.png"

import "./ContactBox.css";



/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const ContactBox = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  function reveal() {
    var reveals = document.querySelectorAll("#reveal")
    console.log(reveals)
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
  
  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
}


  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  window.addEventListener("scroll", reveal);
  return (
    <div>
    <canvas id = "reveal" className = "contactCanvas">
    </canvas>
    <p id = "reveal" className = "connect">
      let's connect
    </p>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=evanhong7384@gmail.com"><img src = {gmail} className = "ContactBox-gmail"/></a>
    <a href="https://www.linkedin.com/in/evan-hong-291b691b4/"><img src = {linkedin} className = "ContactBox-linkedin"/></a>
    <a href="https://github.com/evanhong7384"><img src = {github} className = "ContactBox-github"/></a>
    <div>

    </div>
    <img src = {hands} className = "ContactBox-hands"/>


    </div>
   
  );
};

export default ContactBox;
