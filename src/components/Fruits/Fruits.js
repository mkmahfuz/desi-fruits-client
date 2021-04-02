import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import './Fruits.css';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5050/allFruits';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setFruits(data);
            });
    }, []);

    return (

        <Container className='all-fruits'>
            <Row>
                <Col>
                    <CardColumns>
                        {
                            fruits.map(fruit => <Fruit key={fruit._id} fruit={fruit}></Fruit>)
                        }
                    </CardColumns>
                </Col>
            </Row>

        </Container>
        // <div>
        //     <h2>this is fruits compo</h2>
        //     <div>
        //         {
        //             //fruits.map(fruit => <li key={fruit._id}>Name:{fruit.name}</li>)
        //             fruits.map(fruit => <Fruit key={fruit._id} fruit={fruit}></Fruit>)
        //         }
        //     </div>
        // </div>
    );
};

export default Fruits;