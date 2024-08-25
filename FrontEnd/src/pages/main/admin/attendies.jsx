import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './assets/css/s.css';
import { CSVLink } from "react-csv";
import Nav from './nav';
import Foot from './foot';
import QRCode from 'qrcode.react';
import Papa from 'papaparse'; 

function Attendies() {
    const [data, setData] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch data from your API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/attendees');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Prepare data for CSV
    const csvData = [
        ["#", "Name", "Email", "Phone", "Role", "T Shirt Size"],
        ...data.map(({ id, name, email, phone, role, tShirtSize }, index) => [
            index + 1, // Adding 1 for index
            name, email, phone, role, tShirtSize 
        ]),
    ];

    // // Handle CSV import
    // const handleCSVUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         Papa.parse(file, {
    //             header: true,
    //             skipEmptyLines: true,
    //             complete: (result) => {
    //                 setImportedData(result.data);
    //                 console.log('Imported Data:', result.data);
                    
    //             },
    //             error: (error) => {
    //                 console.error('Error parsing CSV:', error);
    //             }
    //         });
    //     }
    // };

    const filteredData = data.filter(item => {
        const searchTerm = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchTerm) ||
            item.email.toLowerCase().includes(searchTerm) ||
            item.phone.toLowerCase().includes(searchTerm) ||
            item.role.toLowerCase().includes(searchTerm) ||
            item.tShirtSize.toLowerCase().includes(searchTerm)
        );
    });



    return (
        <div className="main-content">
            <Nav/>

            <div className="container-fluid content-top-gap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Attendee</li>
                    </ol>
                </nav>

                <div className="container mt-2">
                    <div className="text-center darken-grey-text mb-2">
                        <Link className="btn btn-danger btn-md" to='/atform' rel="noreferrer">Add New</Link>
                        <CSVLink className="btn btn-success btn-md" filename="my-file.csv" data={csvData}>Export</CSVLink>
                        {/* <label className="btn btn-success btn-md">
                            Import
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleCSVUpload}
                                style={{ display: 'none' }}
                            />
                        </label> */}
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Search within table</h2>
                                    <div className="input-group md-form form-sm form-2 pl-0">
                                        <input className="form-control my-0 py-1 pl-3 purple-border" type="text" placeholder="Search something here..." aria-label="Search"  value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}/>
                                        <span className="input-group-addon waves-effect purple lighten-2" id="basic-addon1">
                                            <a><i className="fa fa-search white-text" aria-hidden="true"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>T Shirt Size</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.map((item, index) => (
                                        <tr key={item.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td>{item.tShirtSize}</td>
                                            <td>
                                                {/* <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleQRCodeClick(item)}
                                                >
                                                    QR Code
                                                </button> */}
                                                {/* Optionally, display QR code */}
                                                <QRCode value={`Name: ${item.name}, Email: ${item.email}`} size={100} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Foot/>
        </div>
    );
}

export default Attendies;
