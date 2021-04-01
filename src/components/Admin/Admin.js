import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        //imgbb code for image file upload-- it will return image url
        const imageData = new FormData();
        imageData.set('key', '7c9242b1b1286a3edd08ed45c8f4fc89');
        imageData.append('image', event.target.files[0]);

        const imgbbURL = 'https://api.imgbb.com/1/upload';

        //post data using axios help from github/axios
        axios.post(imgbbURL,imageData)
            .then(function (response) {
                //console.log(response);
                console.log(response.data.data.display_url); //will get the img url
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div>
            <h2>This is admin page</h2>
            <div><h2>left side</h2></div>
            <div>
                <h2>Right side</h2>


                <form onSubmit={handleSubmit(onSubmit)}>

                    Name: <input type="text" name="name" defaultValue="name" ref={register} /><br />
                    Price: <input type="number" name="price" defaultValue="100" ref={register} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue="1" ref={register} /><br />
                    Image: <input type="file" name="image" onChange={(evnt) => handleImageUpload(evnt)} /><br />

                    extra: <input name="exampleRequired" ref={register({ required: true })} /> <br />

                    <input type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Admin;