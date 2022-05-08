import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageInventories = () => {

    const [manageInventories, setManageInvetories] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setManageInvetories(data))
    }, [])

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
                                <td>{manageInventory.id}</td>
                                <td>{manageInventory.name}</td>
                                <td>{manageInventory.price}</td>
                                <td>{manageInventory.quantity}</td>
                                <td>{manageInventory.sName}</td>
                            <th><Button variant="dark"><i class="fa-solid fa-square-plus"></i></Button></th>
                            <th><Button variant="dark"><i class="fa-solid fa-trash"></i></Button></th>
                            </tr>
                            
                        </tbody>
                    ))}

                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;