import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function CourseHeader(props) {
    return (
        <div>
            <Form className="">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center mt-5">Обучающий онлайн-хуй</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="text-center mb-5" href="course">Курс 1</h3>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}

export default CourseHeader;