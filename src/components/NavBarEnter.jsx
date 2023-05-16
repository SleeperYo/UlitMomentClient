import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.jpg";

function NavBarEnter(props) {
    return (
        <Navbar  bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    UlitMoment
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBarEnter;