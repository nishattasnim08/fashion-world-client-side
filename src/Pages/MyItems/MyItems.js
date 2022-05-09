import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        fetch(`https://intense-lake-58612.herokuapp.com/mydress?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])

    const handleDelete = (id) => {
        const permission = window.confirm(
            "Are you Sure? If deleted you cannot back it."
        );
        if (permission) {
            fetch(`https://intense-lake-58612.herokuapp.com/dress/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.deletedCount);
                    if (data.deletedCount >= 0) {
                        const rest = myItems.filter((dress) => dress._id !== id);
                        setMyItems(rest);

                        console.log(rest);
                    }
                });
        }
    };

    return (
        <div className='container'>
            <div className='text-center mt-5'>
                <h1>My Items</h1>
            </div>

            <div className='devide'></div>

            <div className='my-5 text-center'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    {myItems.map((manageInventory) => (
                        <tbody>
                            <tr>
                                <td>{manageInventory._id}</td>
                                <td>{manageInventory.name}</td>
                                <td>{manageInventory.price}</td>
                                <td>{manageInventory.quantity}</td>
                                <td>{manageInventory.sName}</td>
                                <th><Button onClick={() => handleDelete(manageInventory._id)} variant="dark"><i class="fa-solid fa-trash"></i></Button></th>
                            </tr>

                        </tbody>
                    ))}

                </Table>
                <Button onClick={() => navigate('/addItem')} className="mt-4" variant="dark">Add Item</Button>
            </div>
        </div>
    );
};

export default MyItems;