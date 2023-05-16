import React, {useState} from 'react';
import {Button, Form, Modal, Stack} from "react-bootstrap";
import {useForm} from "react-hook-form";

function UserSettings(props) {

    const {register, handleSubmit} = useForm()

    const [show, setShow] = useState(false);
    const submitHandler = (data) => {
        console.log(data)
        handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Настройки
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Настройки</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack className="gap-3">
                            <Form.Group>
                                <Form.Label>Данные для замены</Form.Label>
                                <Form.Control {...register("name")}/>
                            </Form.Group>

                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Отменить
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default UserSettings;