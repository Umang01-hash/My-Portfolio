import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitileMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import bgImage from './assets/img/parallex/background.webp';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import TimeLine from './components/project-timeline/project-timeline.component';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal/>
      <TitileMessage/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={bgImage}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Bounce duration={2000}>
            <About />
            </Bounce>
          
          </Container>
      
      </Parallax>
      </div>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={2000}>
            <hr />
            <Skills/>
            </Fade>
          
          </Container>
      
      </Parallax>
      </div>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={bgImage}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
          <hr />
            <Experience />
            
          
          </Container>
      
      </Parallax>
      </div>

      <div>
     
          <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine/>
            </Slide>
          
          </Container>
     
      </div>


     
      
      
    </div>
  );
};

export default App;
