import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Dropdown, DropdownButton, Form, FormText, Offcanvas, Row, Table} from "react-bootstrap";
import CourseHeader from "./CourseHeader";
import {useParams} from "react-router-dom";
import FileUpload from "./FileUpload";

function Course(props) {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [files, setFiles] = useState(null);

    useEffect(() => {
        console.log(files)
    }, [files])


    const {id} = useParams()

    const [card, setCard] = useState();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setCard(data)
                setLoading(false);
            })
    }, [])

    const [subject, setSubject] = useState(1);

    const scores = []
    for (let i = 0; i < 20; i++) {
        scores.push({subject: `Тест ${i + 1}`, score: Math.floor(Math.random() * 5 + 1)})
    }

    const backgroundColor = (score) => {
        switch (score) {
            case 1:
            case 2:
                return 'danger'
            case 3:
                return 'warning'
            case 4:
            case 5:
                return "success"
            default:
                return "white"
        }
    }





    return (

        <div>
            <Container>
                <h3 className="text-center  my-5" href="course">{!loading && card.title}</h3>
            </Container>
            <Container className="">
                <Row>
                    <div className="d-flex justify-content-between">
                        <Button>Тема {subject - 1}</Button>
                        <Button variant="primary" onClick={handleShow}>
                            Оценки
                        </Button>
                        <Button>Тема {subject + 1}</Button>
                    </div>

                </Row>

                <Row>
                    <FormText>
                        {!loading && card.body}
                    </FormText>
                </Row>
                <Row>
                    <FileUpload/>
                </Row>
            </Container>
            <Offcanvas placement={"end"} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Оценки</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table>
                        <tbody>
                        {scores.map((score, index) => (
                            <tr key={index}>
                                <td className="text-center align-middle">{score.subject}</td>
                                <td
                                    className={`text-center text-white`}>
                                    <h5 className={`bg-${backgroundColor(score.score)} p-1 m-0`}>
                                        {score.score}
                                    </h5>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Course;