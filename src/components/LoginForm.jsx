import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
    const navigate = useNavigate()
    const submitHandler = () => {
        navigate("/courses")
    }
    return (
        <div>
            <Form onSubmit={submitHandler} style={{backgroundColor: "#EFEFEF"}} className='p-3 mt-5 col-md-4 offset-md-4 align-self-center form d-grid'>
            <span className="p-1 mx-auto  textHead">Вход</span>
            <Form.Group className="p-1 col-md-10 offset-md-1 align-self-center" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="p-1 col-md-10 offset-md-1 align-self-center" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="button-flat p-1 mt-3 mx-auto " type="submit">
                Войти
            </Button>
        </Form>
        </div>

    );
}

export default LoginForm;