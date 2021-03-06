import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from '../images/organizationjpeg.jpg';
import MetaMaskLoginButton from 'react-metamask-login-button';
import '../stylesheet/style.css'
import Particles from 'react-tsparticles';

class Home extends Component {
  render() {
    return (
        <div>
          <Particles
              params={{
                particles: {
                  number: {
                    value: 200,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  },
                  color: {
                    value: ["#2FA4FF", "#2FA4FF"]
                  },
                  shape: {
                    type: "polygon",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 4
                    }
                  },
                  size: {
                    value: 2,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 4,
                      size_min: 1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#58636d",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 5,
                    direction: "left",
                    random: true,
                    straight: true,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: true,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: false,
                      mode: "grab"
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 200,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
              }} />
     <div className="container">
      {/*<h1 className="head">Charithereum</h1>*/}

      <div className="main-home container">
        <div className="row sub-head">
          <div className="col main-content">
            <h4 className="content1"><span className="brand-highlight">Charithereum</span> is a decentralized platform for donation via <strong>Ethereum Blockchain</strong>. It allows people to make charitable donations directly, leading to the removal of involvement of fraudulent and faulty corrupted middlemen, keeping the donation related activity anonymous.</h4>
            <h4 className="content2">It allows charitable organizations to raise funds for their activities and events through Ethereum blockchain.</h4>
          </div>
        </div>
        {/*<div className="row metamask-btn">*/}
        {/*  <MetaMaskLoginButton />*/}
        {/*</div>*/}
        <div className="btn-row">
          <div className="">
            <Link to={`/explore`}>
              <Button color="danger" className="exp-btn1">Explore</Button>
            </Link>
          </div>
          <div className="btn2">
            <Link to={`/request`}>
              <Button color="danger" className="exp-btn1">Request</Button>
            </Link>
          </div>
        </div>
      </div>
     </div>
{/*     <div className="image">
      <img width="100%" src={image}></img>
    </div> */}
        </div>
    );
  }
}

export default Home;
