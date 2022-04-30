import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import item1 from '../../../images/items/item1.jpg'
import './Inventories.css'

const Inventories = () => {
    return (
        <div>
            <div>
                <h1 className='text-center my-3'>Inventories</h1>
            </div>
            <div className='devide'></div>
            <div className='my-5 items'>
                <Row xs={1} md={2} className="g-5">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item1} />
                                <Card.Body className='text-center'>
                                    <Card.Title className=' text-center'>T-Shirt</Card.Title>
                                    <Card.Text>
                                        <p className=' text-center'>Comfortable for summer. Available in various colors over 50 shades</p>
                                        <h5 className='text-start'>Price:</h5>
                                        <h5 className='text-start'>Quantity:</h5>
                                        <h5 className='text-start'>Supllier Name:</h5>
                                    </Card.Text>
                                    <button className='btn btn-dark'>Update Item</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Inventories;