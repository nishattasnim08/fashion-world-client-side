import React from 'react';
import { Table } from 'react-bootstrap';

const ManageInventories = () => {
    return (
        <div className='container my-5 text-center'>
            <div>
                <h1>Manage Inventories</h1>
            </div>
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <th key={index}>Product Name</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;