import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import item1 from '../../../images/items/item1.jpg'
import './Inventories.css'

const Inventories = () => {

    const [inventories, setInvetories] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setInvetories(data))
    },[])

    return (
        <div id='inventory'>
            <div>
                <h1 className='text-center my-3'>Inventories</h1>
            </div>
            <div className='devide'></div>
            <div className='my-5 items'>
                <Row xs={1} md={2} className="g-5">
                    {inventories.map((inventory) => (
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
                                    <button className='btn btn-dark'>Update Item</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='text-center'>
                <button className='btn btn-dark'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Inventories;