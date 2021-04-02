import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Order from '../Order/Order';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        //const url = 'http://localhost:5050/orders?email=' + loggedInUser.email;
        const url = 'https://ancient-ocean-50478.herokuapp.com/orders?email=' + loggedInUser.email;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            });
    }, []);

    return (
        <Container className='all-fruits'>
            <Row>
                <Col>
                    <h5 id="order-head">Hi, {loggedInUser.name} Your Order's history :</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>OrderID</th>
                                <th>Order Date</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}><Order order={order}></Order></tr>)
                            }
                        </tbody>
                    </Table>


                </Col>
            </Row>

        </Container>
    );
};

export default Orders;