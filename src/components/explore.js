import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardImg, CardSubtitle, CardText, Row, Col, CardBody, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import classnames from 'classnames';
import logo from '../images/logo.jpeg';
import logo1 from '../images/logo1.jpeg';
import Me from '../images/Me.jpg';
import Me1 from '../images/Me1.jpg';

const Explore = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  console.log("ppp", props.requests);
  return (
    <div className="container bg explore-main">
      {/*<div className="row">*/}
      {/*    <div className="col-12">*/}
      {/*      <h3 className="exp-heading">Select the criteria from below tabs whom you would like to donate to..</h3>*/}
      {/*      <hr />*/}
      {/*    </div>*/}
      {/*</div>*/}
      <div className="row">
        <div className="col-12">
          <Nav tabs>
            <NavItem>
              <NavLink type="button"
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Peer To Peer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink type="button"
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Charity
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="row tabs-main-container">
                {
                  props.requests.map((request, key) => {
                    let donator

                    if (request.owner === request.donator) {
                      console.log("c seller", true);
                      donator = "No Donator"
                    } else {
                      donator = request.donator
                    }
                    return (
                      <Col sm="12" md="6">
                        <div className="custom-card">
                          <div className="header-card">
                            <img width="130px" height="130px" src={request.image} alt="Card cap" className="card-image" />
                            <div className="header-card-content">
                              <p className="name">Name: {request.name}</p>
                              <p className="price">Amount: Ether {window.web3.utils.fromWei(request.price.toString(), 'Ether')} </p>
                              {
                                !request.donated
                                  ? <Button
                                    color="info"
                                    className="donate-btn"
                                    id={request.id}
                                    value={request.price}
                                    onClick={(event) => {
                                      props.fullFillRequest(event.target.id, event.target.value)
                                    }}
                                  >
                                    Donate Now</Button>
                                  : null
                              }
                            </div>
                          </div>
                          <div className="body-card">
                            <CardText>Story: {request.story}</CardText>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="row tabs-main-container">
                {
                  props.charityRequests.map((request, key) => {
                    let status

                    if (request.live === false) {
                      console.log("c seller", true);
                      status = "Closed"
                    } else {
                      status = "Live"
                    }

                    return (
                      <Col sm="12" md="6">
                        <div className="custom-card">
                          <div className="header-card">
                            <img width="130px" height="130px" src={request.image} alt="Card cap" className="card-image" />
                            <div className="header-card-content">
                              <p className="name">Id: {request.id.toString()}</p>
                              <p className="name">Name: {request.name}</p>
                              <p className="name">Amount: Eth {window.web3.utils.fromWei(request.raiseGoal.toString(), 'Ether')} </p>
                              <p className="name">Amount Raised: Eth{request.ammountRaised.toString()}</p>
                              <p className="name">Status: {status}</p>
                              <p> Visit The Requests For Fund Raising</p>
                            </div>
                          </div>
                          <div className="body-card">
                            <CardText>Story: {request.cause}</CardText>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default Explore;