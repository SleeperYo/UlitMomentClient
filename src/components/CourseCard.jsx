import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

function CourseCard(props) {


    return (
        <Col>
            <Card className="mx-auto h-100 profileForm">
                <Card.Img variant="top" src={props.src} className="p-0 col-md-0 offset-md-0"/>
                <Card.Body className="h-100 d-grid">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <Button className="mt-auto" variant="outline-dark" href={`/course/${props.id}`}>Подробнее</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CourseCard;