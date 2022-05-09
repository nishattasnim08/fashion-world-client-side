import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {

    const [inventory, setInvetory] = useState({});
    const { dressId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/dress/${dressId}`)
            .then(res => res.json())
            .then(data => setInvetory(data))
    }, [])

    return (
        <div className='container '>
            <div id='inventory' className='my-5'>
                <div>
                    <h1 className='text-center my-3'>Inventory</h1>
                </div>
                <div className='devide'></div>
                <div className='my-5 item'>
                    <Row xs={1} md={2} className="g-5">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src={inventory.picture} />
                                <Card.Body className='text-center'>
                                    <Card.Title className=' text-center'>{inventory.name}</Card.Title>
                                    <Card.Text>
                                        <p className=' text-center'>{inventory.about}</p>
                                        <h5 className='text-start'>Price: {inventory.price} $</h5>
                                        <h5 className='text-start'>Quantity: {inventory.quantity}</h5>
                                        <h5 className='text-start'>Supllier Name: {inventory.sName}</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Inventory;