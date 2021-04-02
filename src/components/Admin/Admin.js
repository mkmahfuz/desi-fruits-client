
import React, { useState } from 'react';
import Addfruits from '../Addfruits/Addfruits';
import Managefruits from '../Managefruits/Managefruits';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css';
import { faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

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
                <Col sm={3} id="col-left">
                    <div id="admin-left">
                        <h5 id="manage" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faThLarge} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Manage Fruits</h5>
                        <h5 id="add" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Add Fruits</h5>
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


    );
};

export default Admin;