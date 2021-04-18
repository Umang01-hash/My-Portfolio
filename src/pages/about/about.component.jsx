import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/pic2.jpeg'
import Button from "react-bootstrap/Button";
import "./about.style.css";

const About  = () => {
    return (
        <div id='about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                {/* Profile Pic  */}
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6} >
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    {/* About me Description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            {/*  Description */}
                            Hi there! I am <strong>&nbsp;Umang Mundhra</strong>
                            <br />I am pursuing B.Tech in computer science from Galgotias University .I am a detail-oriented person and can juggle between tasks.
                            I am born and brought up in Delhi. I am an passionate learner and have keen interest in Web Developement where I have learned MEAN Stack (MongoDb + Express + React + Node ).
                            Alongside ,I am  always trying to Upgrade my Problem Solving Skills improving my hand on OOPS and DS & Algorithms. The idea of implementing my skills on real life applications and opportunites always fascinate and motivate me. I have interest in technologies and computer right from school days and that brought me up here . My goal is always driven towards proving myself in task alloted to me to provide delightful outcomes
                            <br />
                            <br/>
                        </Row>
                        <Row>
                            {/*  Links */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                <a href="#contact">
                                     <Button className="m-2" variant="outline-primary">
                                     Let's talk
                                     </Button>
                                    </a>
                                </div>
                                <div>
                    <a href="https://drive.google.com/file/d/10sU5CI6S_Clm3e2UEOB4x2A8NvHrLN6W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Umang01-hash" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/umang01-hash/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About;