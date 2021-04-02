import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Addfruits = () => {
    const [imageURL, setImageURL] = useState(null);
    const [info, setInfo] = useState(false);
    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const fruitData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imgurl: imageURL
        };
        //console.log(data);
        console.log(fruitData);
        //post fruitdata to server to save to mongodb
        //const url = 'http://localhost:5050/addFruit';
        const url = 'https://ancient-ocean-50478.herokuapp.com/addFruit';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fruitData)
        })
            .then(res => res.json())
            .then(data => {

                setInfo(data);
                history.push('/home');
                // <Redirect to = "/home"/>
                console.log("ddd:", data);
            });

    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        //imgbb code for image file upload-- it will return image url
        const imageData = new FormData();
        imageData.set('key', '7c9242b1b1286a3edd08ed45c8f4fc89');
        imageData.append('image', event.target.files[0]);

        const imgbbURL = 'https://api.imgbb.com/1/upload';

        //post data using axios help from github/axios
        axios.post(imgbbURL, imageData)
            .then(function (response) {
                //console.log(response);
                //console.log(response.data.data.display_url); //will get the img url
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div>
            <h2>Add Fruits </h2>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Fruit's Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue="fruit's name" ref={register} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" defaultValue="100" ref={register} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" defaultValue="1" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" name="image" label="Add Photo" onChange={(evnt) => handleImageUpload(evnt)}/>
                </Form.Group>

                <Button className='float-right' variant="primary" type="submit">Save</Button>
            </Form>
            <div>
                {
                    <p>{info && 'Fruit info added successfully'}</p>
                }
            </div>
        </div>
    );
};



export default Addfruits;