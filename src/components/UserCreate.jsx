import React, {useState} from 'react';
import {Button, Form, Modal, Stack} from "react-bootstrap";
import {useForm} from "react-hook-form";

function UserCreate(props) {

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
                Создать пользователя
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Создание пользователя</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack className="gap-3">
                            <Form.Group>
                                <Form.Label>Адрес электронной почты</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" {...register("email")}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Имя</Form.Label>
                                <Form.Control {...register("name")}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control {...register("surname")}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Отчество</Form.Label>
                                <Form.Control {...register("patronymic")}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Место работы/учёбы</Form.Label>
                                <Form.Control {...register("studieplace")}/>
                            </Form.Group>



                            <div>
                                {[  {label: 'Админ', value: "ROLE_ADMIN"},
                                    {label: "Ученик", value: "ROLE_USER"},
                                    {label: "Преподаватель", value: "ROLE_TEACHER"},
                                    {label: "Куратор", value: "ROLE_CURATOR"
                                }].map((roles) => (
                                    <Form.Check
                                        key={roles.value} className="mb-3"
                                        inline
                                        label={roles.label}
                                        value={roles.value}
                                        type="radio"
                                        {...register("role")}
                                    />
                                ))}
                            </div>

                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Отменить
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Создать пользователя
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div>
    );
}

export default UserCreate;