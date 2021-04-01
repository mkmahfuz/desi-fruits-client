
import React from 'react';
import Addfruits from '../Addfruits/Addfruits';
import Managefruits from '../Managefruits/Managefruits';

const Admin = () => {
    
    return (
        <div>
            <h2>This is admin page</h2>
            <div><h2>left side</h2></div>
            <div>
                <h2>Right side</h2>
                <Addfruits></Addfruits>
            </div>
            <div>
                <h2>Manage Fruits</h2>
                <Managefruits></Managefruits>
            </div>
        </div>
    );
};

export default Admin;