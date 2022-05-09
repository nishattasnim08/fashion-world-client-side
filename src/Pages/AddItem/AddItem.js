import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const handleAddItem = (event) => {
        event.preventDefault();
        // console.log(event);

        const sEmail = user.email;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sName = event.target.sName.value;
        const about = event.target.about.value;
        const picture = event.target.picture.value;

        const data = { sEmail, name, price, quantity, sName, about, picture };

        fetch("https://intense-lake-58612.herokuapp.com/dresses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                navigate('/manageInventories');
            });


        console.log(data);


    }

    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Add Item</h1>
            </div>

            <div className='devide w-50'></div>

            <div className='w-50 mx-auto my-5'>
                <Form onSubmit={handleAddItem}>
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
                        <Form.Control type="number" name="quantity" placeholder="Enter Your Product Quantity" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Supplier Name</Form.Label>
                        <Form.Control type="text" name="sName" placeholder="Enter Your Product Supplier Name" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product About</Form.Label>
                        <Form.Control type="text" name="about" placeholder="Enter Your Product About" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="url" name="picture" placeholder="Enter Your Product Image URL" required
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