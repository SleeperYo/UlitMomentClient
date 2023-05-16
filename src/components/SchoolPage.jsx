import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function SchoolPage(props) {

    const [schools, setSchools] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setSchools(data))
    },[])


    const filterMenuOptions = {
        Size: ["XS", "S", "M", "L", "XL"],
        Color: ["Red", "Green", "Blue", "Black", "White"],
        For: ["Men", "Women", "Children", "Infants"]
    };
    const [selectedFilterOption, setSelFilterOption] = useState(
        Object.keys(filterMenuOptions)[0]
    );

    const [search, setSearch] = useState("")

    const rows = [{
        img: "",
        fullName: "",
        school: "",
        grade: "",
        id: ""
    }]

    return (
        <div>
            <Container className="col-md-8 p-5">
                <Table align='middle' className="table-light col-5" responsive hover>
                    <thead>
                    <tr>
                        <th scope='col'>Номер школы</th>
                        <th scope='col'></th>
                    </tr>
                    </thead>
                    <tbody>
                    {schools.map(school => (
                        <tr key={school.id}>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>Школа №{school.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td className=" d-flex justify-content-end">
                                <Button variant="outline-dark">
                                    Посмотреть
                                </Button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default SchoolPage;