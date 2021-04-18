import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import Nanodegree from "../../assets/img/experience/Nanodegree.jpeg";
import Specialization from "../../assets/img/experience/ReactSpecialization.jpeg";
import Udemy from "../../assets/img/experience/Udemy.jpeg";

import "./experience.styles.css";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details pb-3">ACKNOWLEDGEMENTS & CERTIFICATES</h1>
            <Jumbotron className="jumbostyle"> 
                <Container>
                <Tilt options={{ max: 25 }}>
                <AwesomeSlider
                            animation="foldOutAnimation"
                             cssModule={[CoreStyles, AnimationStyles]}
  >
    <div className=" container portrait" data-src={Nanodegree} />
    <div className=" container portrait" data-src={Specialization} />
    <div className=" container portrait" data-src={Udemy} />
  </AwesomeSlider>
  </Tilt>
             </Container> 
            </Jumbotron>

        </div>

    )
        }

export default Experience;