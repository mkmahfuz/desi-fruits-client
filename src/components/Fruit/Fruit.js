import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Fruit.css';
import { useHistory } from 'react-router-dom';
import { CheckoutContext } from '../../App';

const Fruit = (props) => {
    const { _id, name, price, quantity, imgurl } = props.fruit;
    const history = useHistory();
    const [checkoutProduct, setCheckoutProduct] = useContext(CheckoutContext);

    const handleClick = (id) => {
        setCheckoutProduct(id);        
        const url = '/checkout';
        history.push(url);
    }


    return (
        <Card className='trSingle'>
            <Card.Img variant='top' src={imgurl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Footer className="text-primary" id='card-footer'>
                    <span>Taka {price}</span><Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Buy Now</Button>
                    </Card.Footer>
            </Card.Body>
        </Card>


        // <div>
        //     <li>Name: {name} -Price: {price} Image: <img style={{height:'200px',width:'200px'}} src={imgurl} alt={name}></img>{imgurl}</li>

        // </div>
    );
};

export default Fruit;