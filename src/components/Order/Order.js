import React from 'react';


const Order = (props) => {
    const { _id,name,date,quantity, price} = props.order;
    return (
        <>
            <td>{_id}</td>
            <td>{(new Date(date).toDateString('dd/MM/yyyy'))}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>Processing</td>
        </>
    );
};

export default Order;