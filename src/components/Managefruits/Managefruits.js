import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Managefruits = () => {
    const [fruits, setFruits] = useState([]);
    const [info, setInfo] = useState(false);


    useEffect(() => {
        //const url = 'http://localhost:5050/allFruits';
        const url = 'https://ancient-ocean-50478.herokuapp.com/allFruits';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setFruits(data);
                setInfo(false);
            });
    }, [info]);



    const deleteFruit = (id) => {
        //console.log(id);
        //const url = `http://localhost:5050/deleteFruit/${id}`;
        const url = `https://ancient-ocean-50478.herokuapp.com/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfo(data);

            });

    };


    return (
        <div>
            <h2>Manage Fruits </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fruit Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits.map(fruit => <tr key={fruit._id}>
                            <td>{fruit.name}</td>
                            <td>{fruit.quantity}</td>
                            <td>{fruit.price}</td>
                            <td><button onClick={() => deleteFruit(fruit._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>


            <div style={{ marginTop: '2rem' }}>

                {
                    <p>{info && 'Deleted successfully'}</p>
                }
            </div>
        </div>
    );
};

export default Managefruits;