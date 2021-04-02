
import React, { useState } from 'react';
import Addfruits from '../Addfruits/Addfruits';
import Managefruits from '../Managefruits/Managefruits';
import { Col, Container, Row } from 'react-bootstrap';
import './Admin.css';

const Admin = () => {

    const [displayData, setDisplayData] = useState('manage');

    const showData = (evnt) => {
        //setDisplayData(false);
        console.log(evnt.target.id);
        const evntId = evnt.target.id || 'manage';
        if (evntId === 'add') {
            setDisplayData(evntId);
        } else {
            setDisplayData('manage');
        }
    }

    return (
        <Container>
            <Row style={{ marginTop: '1rem' }}>
                <Col sm={3}>
                    <div id="admin-left">
                        <h5 id="manage" className='border-around' onClick={(evnt) => showData(evnt)}>Manage Fruits</h5>
                        <h5 id="add" className='border-around' onClick={(evnt) => showData(evnt)}>+Add Fruits</h5>
                    </div>
                </Col>
                <Col sm={9}>
                    {console.log(displayData === 'add')}
                   
                    <div id="add-fruit" >
                        {displayData === 'add' && <Addfruits></Addfruits>}
                    </div>
                    <div id="manage-fruit" >
                        {displayData === 'manage' && <Managefruits></Managefruits>}
                    </div>
                </Col>
            </Row>
        </Container>

        // <div>
        //     <h2>This is admin page</h2>
        //     <div><h2>left side</h2></div>
        //     <div>
        //         <h2>Right side</h2>
        //         <Addfruits></Addfruits>
        //     </div>
        //     <div>
        //         <h2>Manage Fruits</h2>
        //         <Managefruits></Managefruits>
        //     </div>
        // </div>
    );
};

export default Admin;