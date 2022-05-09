import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {

    const [inventory, setInvetory] = useState({});
    const { dressId } = useParams();
    useEffect(() => {
        fetch(`https://intense-lake-58612.herokuapp.com/dress/${dressId}`)
            .then(res => res.json())
            .then(data => setInvetory(data))
    }, [])

    const handleRestock = (event) => {
        event.preventDefault();

        console.log("??????????????");
        let newQuantity = event.target.quantity.value;
        let quantity = inventory.quantity + parseInt(newQuantity);

        console.log(quantity);

        const newInvetory = { ...inventory, quantity: quantity };
        setInvetory(newInvetory);
        fetch(`https://intense-lake-58612.herokuapp.com/dress/${inventory._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    const handleQuantity = (id) => {

        let quantity = inventory.quantity - 1;
        const newInvetory = { ...inventory, quantity: quantity };
        setInvetory(newInvetory);
        fetch(`https://intense-lake-58612.herokuapp.com/dress/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        console.log(id);
    }


    return (
        <div className='container '>
            <div id='inventory' className='my-5'>
                <div>
                    <h1 className='text-center my-3'>Inventory</h1>
                </div>
                <div className='devide'></div>
                <div className='d-flex'>
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
                                            <h5 className='text-start'>Suppllier Name: {inventory.sName}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className='my-auto'>
                        <Form onSubmit={handleRestock}>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Product Quantity</Form.Label>
                                <Form.Control type="number" name="quantity" placeholder="Enter Your Restock Quantity" required
                                />
                            </Form.Group>
                            <input type="submit" value={"Restock"} />
                        </Form>
                    </div>
                </div>
                <Button onClick={() => handleQuantity(inventory._id)} variant="dark">Delivered</Button>
            </div>
        </div>
    );
};

export default Inventory;