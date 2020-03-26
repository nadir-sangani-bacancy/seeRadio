import React from 'react';
import './App.css';
import logo from './logo.png'
import notify from './notification.png'
import { Button, Form, Navbar, Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import Avatar from 'react-avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  logout() {
    localStorage.clear()
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <span style={{ fontSize: "20px", marginLeft: "20px" }}><img src={logo}></img></span>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <img style={{ marginTop: "40px", float: "right" }} src={notify}></img>
            </Col>
            <Col>
              <p style={{ marginLeft: "100px", marginTop: "25px" }}><Avatar name={localStorage.firstname + " " + localStorage.lastname} size={50} round="50px" /></p>
              <p id="dropdown-basic" style={{ marginLeft: "120px", marginTop: "-15px" }}>⮟</p>
            </Col>
            <Col>
              <p style={{ marginTop: "20px", fontSize: "15px" }}>{localStorage.firstname} {localStorage.lastname}</p>
              <p style={{ marginTop: "-15px", fontSize: "15px", color: "blue" }}>{localStorage.roll}</p>
              <p style={{ marginTop: "-15px", fontSize: "15px" }}>{localStorage.email}</p>
            </Col>
          </Row>
        </Container>

        <Navbar expand="lg" style={{ marginTop: "10px" }} bg="primary" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Link to="/Dashbord">
                <Button variant="primary"><span>🧭</span>Dashbord</Button>
              </Link>

              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <span>🔥</span>Campaigns
              </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to="/campaign-table">Active Campaigns/Orders </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/campaign-table">Campaigns in Market </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/campaign-table">Completed Campaigns </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link to="/Advertisers">
                <Button variant="primary"><span>🎞</span>Advertisers</Button>
              </Link>
            </Nav>

            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <span>🤵</span>Administrator
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <NavLink to="/client-contract"> ➕ Advertisers </NavLink>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <NavLink to="/add-campaign"> ➕ Campaigns </NavLink>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">➕ Sales Person</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link to="/Login">
              <Button variant="primary" onClick={() => this.logout()}>Logout</Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>

      </div >
    )
  }
}

export default Navigation;