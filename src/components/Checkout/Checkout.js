import React, { useContext, useEffect, useState } from 'react';
import { CheckoutContext, UserContext } from '../../App';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const [checkoutProduct] = useContext(CheckoutContext);
    const [loggedInUser] = useContext(UserContext);
    let history = useHistory();

    const [fruits, setFruits] = useState([]);
    const { _id, name, quantity, price } = { ...fruits };

    useEffect(() => {
        const id = checkoutProduct;
        const url = `http://localhost:5050/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFruits(data);
            });
    }, [checkoutProduct]);


    const saveOrder = (id) => {
        const orderData = { ...fruits };
        orderData.email = loggedInUser.email;
        orderData.user = loggedInUser.name;
        console.log(orderData);

        //post orderData to server to save to mongodb
        const url = 'http://localhost:5050/addOrder';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data && history.push('/orders')
                //if data positive then push to order page
                //history.push('/orders');
                
            });
    };

    return (

        <Container className='checkout'>
            <Row>
                <Col>
                    <h2>CheckOut</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{name}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="2">Total</td>
                                <td>{price}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="float-right" >
                        <Button variant="primary" onClick={() => saveOrder(_id)}>Buy Now</Button>
                    </div>

                </Col>
            </Row>

        </Container>
        // <div>
        //     <h2>This is checkout page</h2>
        //     <p>Checkout product id: {checkoutProduct}</p>
        //     <p>{name}{quantity}{price}</p>
        // </div>
    );
};

export default Checkout;