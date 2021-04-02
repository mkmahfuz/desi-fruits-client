import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row ,Table} from 'react-bootstrap';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'http://localhost:5050/orders?email=' + loggedInUser.email;
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
                <h5>Hi, {loggedInUser.name} Your Orders :</h5>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>                            
                                {
                                   orders.map(order => <tr><Order key={order._id} order={order}></Order></tr>) 
                                }
                                                                                 
                            
                        </tbody>
                    </Table>
                    

                    {
                       // orders.map(order => <Order key={order._id} order={order}></Order>)
                    }

                </Col>
            </Row>

        </Container>

        // <div>
        //     <h2>this is orders page</h2>
        //     <h5>You have {orders.length} orders</h5>
        //     {
        //         orders.map(order => <Order key={order._id} order={order}></Order>)
        //     }
        // </div>
    );
};

export default Orders;