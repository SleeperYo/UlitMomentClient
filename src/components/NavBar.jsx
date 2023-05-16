import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.jpg";
import {Button, ButtonGroup, Dropdown, Nav} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function NavBar(active) {

    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    UlitMoment
                </Navbar.Brand>
                {active ? (
                    <div className="">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="">
                            <Nav className="">

                                <Nav.Link href="/courses">Курсы</Nav.Link>
                                <Nav.Link href="/schools">Школы</Nav.Link>
                                <Nav.Link href="/students">Пользователи</Nav.Link>
                            </Nav>
                            <Nav>
                                <Dropdown as={ButtonGroup} className="ms-auto">
                                    <Button variant="success" onClick={() => navigate("/profile")}>Профиль</Button>

                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/profile">Профиль</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item href="/login">Выйти</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                ) : <div/>
                }
            </Container>
        </Navbar>
    );
}

export default NavBar;