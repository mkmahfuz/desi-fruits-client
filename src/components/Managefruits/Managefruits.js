import React, { useEffect, useState } from 'react';

const Managefruits = () => {
    const [fruits, setFruits] = useState([]);
    const [info,setInfo] = useState(false);
    

    useEffect(() => {
        const url = 'http://localhost:5050/allFruits';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setFruits(data);
                setInfo(false);
            });
    }, [info]);

    

    const deleteFruit = (id) => {
         console.log(id); 
         const url = `http://localhost:5050/deleteFruit/${id}`;
         fetch(url,{
             method: 'DELETE'
         })
             .then(res => res.json())
             .then(data => {
                 console.log(data);
                 setInfo(data);
                 
             });
        
        };
        

    return (
        <div>
            {
                fruits.map(fruit => <li key={fruit._id}>
                    Fruits Name: {fruit.name}
                   Quantity: {fruit.quantity}
                   Price: {fruit.price}
                    <button onClick={() => deleteFruit(fruit._id)}>Delete</button>
                </li>)
            }
            <div>
                <h5>Information</h5>
                {
                    <p>Delete Info: { info && 'Deleted successfully'}</p>
                }
            </div>
        </div>
    );
};

export default Managefruits;