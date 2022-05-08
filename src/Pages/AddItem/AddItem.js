import React from 'react';
import { Form } from 'react-bootstrap';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Add Item</h1>
            </div>

            <div className='devide w-50'></div>

            <div className='w-50 mx-auto my-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Your Product Name" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" name="price" placeholder="Enter Your Product Price" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="number" name="price" placeholder="Enter Your Product Quantity" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Supplier Name</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Enter Your Product Supplier Name" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="url" name="price" placeholder="Enter Your Product Image URL" required
                        />
                    </Form.Group>
                    <div className='text-center'>
                        <input type="submit" value={'Add Item'} className='btn btn-dark' />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;