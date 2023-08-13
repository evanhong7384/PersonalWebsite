import React, { useState, useEffect } from "react";
import NavBar from "./modules/NavBar.js";
import ContactBox from "./modules/ContactBox.js"
import mainphoto from '../public/IMG_3032_1.png'
import sunrise from '../public/Sunrise.png'
import hiking from '../public/hiking.png'
import coffee from '../public/coffee.png'
import mouse from '../public/mouse_transparent.png'
import jet from '../public/jet_transparent.png'
import car from '../public/car_doodle_transparent.png'

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */

const App = () => {
  
  const handleAboutClick = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    
  };
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

// To check the scroll position on page load

  

  

  

  // required method: whatever is returned defines what
  // shows up on screen
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar handleAboutClick={handleAboutClick} />
      <body className = "App-items">
        <img src = {mainphoto}  className = "App-profile" 
        />
        <div>
          <p id = "home" className = "App-homeMarker">
            here
          </p>
          <p className = "App-hello">
            Hello World!
          </p>
          <p className = "App-Name">
            I'm Evan!
          </p>
          <p className ="App-bio">
          I’m a student at MIT with a fascination for computer and neuroscience <br></br>
working in both software development and research!
          </p>
    {isVisible &&
    <div id="arrow" class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
}
        </div> 
        <img src = {sunrise} id = "reveal" className = "App-sunrise" />
        <img src = {hiking} id = "reveal" className = "App-hiking" />
        <img src = {coffee} id = "reveal" className = "App-coffee" />
        <div>
          <p id='about' className="App-aboutMarker">
            here
          </p>
          <p id="reveal" className = "App-about">
            About Me
          </p>
          <p id = "reveal" className = "App-me">
          • I’m  currently a junior at MIT studying computer and neuroscience.<br></br><br/>
          • I’ve held software development positions  that involved building<br/> dashboard specs for Ford Motor Company and  Laser-Eye protection<br/> testing software for the U.S. Air Force.<br/><br/> • During the  school-year,<br/> I continue my research at the McGovern Institute for Brain Sciences<br/> focused of modeling disordered decision making. During my<br/> free-time I love to travel, play board games, and work on personal<br/> coding projects much like this one! 
          </p>
        </div>
        <div>
          <p id = "work" className = "App-workMarker">
            here
          </p>
          <p id = "reveal" className = "App-work">
            Work
          </p>
          <p id = "reveal" className ="App-subtitle">
            Doodling at work!? Hover for more...
          </p>
        </div>
        
        <div className = "App-mouseContainer">
          <p className="App-mouseTitle">
            Undergraduate Researcher @ MIT
          </p>
          <img src = {mouse} id = "reveal" className = "App-mouse"/>
          <p className = "App-mouseDate">
              12/2021-06/2023
          </p>
          <p className = "App-mouseDes">
          • Designed mice lever pressing task<br/> using Arduino and MATLAB for<br/> research on information integration<br/> of mixed signals<br/><br/>
          • Devised general linear models for<br/> the behavior of both wildtype and<br/> schizophrenic mice through SciPy<br/> and Patsy to devise sound-
          proof way<br/> to link genotypes to behaviors exhibited<br/> when it came to cognitive tasks
          </p>
        </div>
        
        <div className = "App-carContainer">
          <p className = "App-carTitle">
            Software Developer @ Ford
          </p>
          <img src = {car} id="reveal" className = "App-car"/>
          <p className="App-carDate">
              06/2023-Present
          </p>
          <p className = "App-carDes" id="carDes">
          • Developed software using<br/> Simulink and Objective-C that<br/> will be used in 6 dashboard<br/> features across multiple vehicles<br/><br/>
          • Reviewed rigorously the code<br/> of colleagues to ensure the<br/> correctness for the safety of<br/> future consumers
          </p>
        </div>
        <div className = "App-jetContainer">
          <p className = "App-jetTitle">
            Software Engineer @ Air Force
          </p>
         <img src = {jet} id = "reveal" className = "App-jet"/>
         <p className = "App-jetDate">
          06/2022-09/2022
         </p>
         <p className = "App-jetDes">
         • Created military-grade LEP test<br/> through MATLAB, recognize_google<br/> API, and Tkinter for a voice-<br/>recognized Stroop task<br/><br/>
• Gave presentation to high-ranked<br/> military officials on the implementation<br/> and future applications of the software
         </p>
        </div>
        <div>
          <p className = "App-contactMarker" id = "contact"> here</p>
          <p className = "App-contact" id = "reveal">
            Contact
          </p>
          <ContactBox handleAboutClick={handleAboutClick} />
          
        </div>
        
        
        
        

      </body>
       
      
      
    </>
    
  );
  
};

export default App;
