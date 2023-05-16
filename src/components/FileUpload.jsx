import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

function FileUpload(props) {

    const [files, setFiles] = useState(null);

    const clickHandler = () => {
        const data = new FormData();
        for(const file of files)
            data.append(`file`, file, file.name);
    }


    return (
        <div>
            <Form.Group controlId="formFileMultiple" className="mt-5 col-md-4">
                <Form.Label>Загрузить домашнее задание</Form.Label>
                <Form.Control type="file" multiple onChange={e => setFiles(e.target.files)}/>
                <Button className="my-2" variant={"outline-primary"} onClick={clickHandler}>Кнопка</Button>
            </Form.Group>
        </div>
    );
}

export default FileUpload;