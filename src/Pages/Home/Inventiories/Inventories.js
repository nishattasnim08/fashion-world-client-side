import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventories.css';

const Inventories = () => {

    const navigate = useNavigate();
    const [inventories, setInvetories] = useState([]);

    useEffect(() => {
        fetch('https://intense-lake-58612.herokuapp.com/dresses')
            .then(res => res.json())
            .then(data => setInvetories(data))
    }, [])

    return (
        <div id='inventory'>
            <div>
                <h1 className='text-center my-3'>Inventories</h1>
            </div>
            <div className='devide'></div>
            <div className='my-5 items'>
                <Row xs={1} md={2} className="g-5">
                    {inventories.slice(0, 6).map((inventory) => (
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
                                    <button onClick={() => navigate(`/inventory/${inventory._id}`)} className='btn btn-dark'>Item Details</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/manageInventories')} className='btn btn-dark'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Inventories;