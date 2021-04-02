import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import { CardColumns, Col, Container, Row, Spinner } from 'react-bootstrap';
import './Fruits.css';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        //const url = 'http://localhost:5050/allFruits';
        const url = 'https://ancient-ocean-50478.herokuapp.com/allFruits';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setFruits(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Container className='all-fruits'>
                <Row>
                    <Col>
                    {loading && <div id='spin-loading'><Spinner animation="border" variant="primary" size="lg"/><p>Loading....</p></div>}
                        <CardColumns>
                        
                            {
                                fruits.map(fruit => <Fruit key={fruit._id} fruit={fruit}></Fruit>)
                            }
                        </CardColumns>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Fruits;