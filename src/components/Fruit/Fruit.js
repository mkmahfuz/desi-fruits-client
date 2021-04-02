import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Fruit.css';

const Fruit = (props) => {
    const { _id, name, price, quantity, imgurl } = props.fruit;
    return (
        <Card className='trSingle'>
            <Card.Img variant='top' src={imgurl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Footer className="text-muted" id='card-footer'><span>{price}</span><Button variant="primary">Buy Now</Button></Card.Footer>
            </Card.Body>
        </Card>


        // <div>
        //     <li>Name: {name} -Price: {price} Image: <img style={{height:'200px',width:'200px'}} src={imgurl} alt={name}></img>{imgurl}</li>

        // </div>
    );
};

export default Fruit;