import React, {useEffect, useState} from 'react';
import {Button, FormControl, Row} from "react-bootstrap";
import course1 from "../course1.jpg";
import CourseCard from "./CourseCard";
import CourseCreate from "./CourseCreate";

function CoursesMain(props) {
    const [open, setOpen] = useState(false);



    const [cards, setCards] = useState([])
    const [filter, setFilter] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        if (filter != '') {
            setFiltered(cards.filter(card => card.title.toUpperCase().includes(filter.toUpperCase())))
        } else {
            setFiltered(cards)
        }
    }, [filter])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setCards(data)
                setFiltered(data)
            })
    }, [])



    return (
        <div className="col-md-10 offset-1 my-5">
            <Row>
                <FormControl placeholder='Введите название курса' value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-5"/>
            </Row>

            <CourseCreate/>


            <Row xs={12} md={3} xxl={4} className="g-5">
                {filtered.map((card) => (

                    <CourseCard key={card.id} src={course1} title={card.title} body={card.body} id={card.id}/>

                ))}
            </Row>


        </div>

    );
}

export default CoursesMain;