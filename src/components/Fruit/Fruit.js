import React from 'react';

const Fruit = (props) => {
    const {_id,name,price,quantity,imgurl} = props.fruit;
    return (
        <div>
            <li>Name: {name} -Price: {price} Image: <img style={{height:'200px',width:'200px'}} src={imgurl} alt={name}></img>{imgurl}</li>
            
        </div>
    );
};

export default Fruit;