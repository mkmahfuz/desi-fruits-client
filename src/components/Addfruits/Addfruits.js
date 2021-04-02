import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory} from 'react-router-dom';

const Addfruits = () => {
    const [imageURL, setImageURL] = useState(null);
    const [info,setInfo] = useState(false);
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
        const url = 'http://localhost:5050/addFruit';
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
                console.log("ddd:",data);
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
            <h2>This is adFruits page</h2>

            <div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    Name: <input type="text" name="name" defaultValue="fruit's name" ref={register} /><br />
                    Price: <input type="number" name="price" defaultValue="100" ref={register} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue="1" ref={register} /><br />
                    Image: <input type="file" name="image" onChange={(evnt) => handleImageUpload(evnt)} /><br />

                    <input type="submit" />
                </form>

            </div>
            <div>
                <h5>Information</h5>
                {
                    <p>Add fruit Info: { info && 'Fruit info added successfully'}</p>
                }
            </div>
        </div>
    );
};



export default Addfruits;