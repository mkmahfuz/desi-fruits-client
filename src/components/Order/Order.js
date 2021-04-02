import React from 'react';


const Order = (props) => {
    const { name,quantity, price, email } = props.order;
    return (
        <>
            <td>{email}</td>
            <td>date</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
        </>
    );
};

export default Order;