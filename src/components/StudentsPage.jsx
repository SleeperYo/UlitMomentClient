import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Dropdown, FormControl, ListGroup, Row, Table} from "react-bootstrap";
import UserCreate from "./UserCreate";

function StudentsPage(props) {

    const [search, setSearch] = useState("")

    const rows = [{
        img: "",
        fullName: "",
        school: "",
        grade: "",
        id: ""
    }]

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        if (filter != '') {
            setFiltered(users.filter(user => user.name.toUpperCase().includes(filter.toUpperCase())))
        } else {
            setFiltered(users)
        }
    }, [filter])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setFiltered(data)
            })
    }, [])

    return (
        <div>
            <Row>
                <FormControl placeholder='Неработающий фильтр' value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-5"/>
            </Row>
            <Container className="col-md-10 p-5">
                <Table align='middle' className="table-light col-5" responsive hover>
                    <thead>
                    <tr>
                        <th scope='col'>Ф.И.О. Учащегося</th>
                        <th scope='col'>Школа</th>
                        <th scope='col'>Класс</th>
                        <th scope='col'></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                        alt=''
                                        style={{width: '45px', height: '45px'}}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>{user.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>Школа {user.id}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>5 класс</p>
                            </td>
                            <td>
                                <Button variant="outline-dark">
                                    Посмотреть
                                </Button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </Container>
            <UserCreate/>

        </div>
    );
}

export default StudentsPage;