import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {

    const navigate = useNavigate();

    const [manageInventories, setManageInvetories] = useState([]);

    useEffect(() => {
        fetch('https://intense-lake-58612.herokuapp.com/dresses')
            .then(res => res.json())
            .then(data => setManageInvetories(data))
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
                        const rest = manageInventories.filter((dress) => dress._id !== id);
                        setManageInvetories(rest);

                        console.log(rest);
                    }
                });
        }
    };


    return (
        <div className='container my-5 text-center'>
            <div>
                <h1>Manage Inventories</h1>
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
                            <th>Add Item</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    {manageInventories.map((manageInventory) => (
                        <tbody>
                            <tr>
                                <td>{manageInventory._id}</td>
                                <td>{manageInventory.name}</td>
                                <td>{manageInventory.price}</td>
                                <td>{manageInventory.quantity}</td>
                                <td>{manageInventory.sName}</td>
                                <th><Button variant="dark"><i class="fa-solid fa-square-plus"></i></Button></th>
                                <th><Button onClick={() => handleDelete(manageInventory._id)} variant="dark"><i class="fa-solid fa-trash"></i></Button></th>
                            </tr>

                        </tbody>
                    ))}

                </Table>
                <Button onClick={() => navigate('/addItem')} variant="dark">Add Item</Button>
            </div>
        </div>
    );
};

export default ManageInventories;