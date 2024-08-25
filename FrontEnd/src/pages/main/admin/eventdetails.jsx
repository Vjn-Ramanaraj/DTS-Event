import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './assets/css/s.css';
import Nav from './nav';
import Foot from './foot';

function Eventform() {
    const [account, setAccount] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("faceAuth")) {
            navigate("/login");
        } else {
            const { account } = JSON.parse(localStorage.getItem("faceAuth"));
            setAccount(account);

            // Fetch event data
            axios.get('http://localhost:5000/getUsers') // Adjust the endpoint as needed
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching event data:", error);
                });
        }
    }, [navigate]);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date)) {
                throw new Error("Invalid date");
            }
            return date.toISOString().split('T')[0]; // Extract YYYY-MM-DD
        } catch (error) {
            console.error("Error formatting date:", dateString, error);
            return "Invalid Date"; // Return a fallback value
        }
    };

    if (!account) {
        return null;
    }

    return (
        <div className="main-content">
            <Nav />
            <div className="container-fluid content-top-gap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>

                <section className="my-5">
                    <div className="container">
                        <div className="main-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src={account.picture} alt="Admin" className="rounded-circle p-1 bg-warning" width="110" />
                                                <div className="mt-3">
                                                    <h4>{account.name}</h4>
                                                </div>
                                            </div>
                                            <div className="list-group list-group-flush text-center mt-4">
                                                <a href="#" className="list-group-item list-group-item-action border-0 active"
                                                    onClick={() => {
                                                        localStorage.removeItem("faceAuth");
                                                        navigate("/");
                                                    }}>
                                                    Logout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div id="orderDetails" className="order_card">
                                        <div className="card mt-4">
                                            <div className="card-body p-0 table-responsive">
                                                <h4 className="p-3 mb-0">Event Details</h4>
                                                <table className="table mb-0">
                                                    <thead>
                                                        <tr><th scope="col">#</th>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Company</th>
                                                            <th scope="col">Specialization</th>
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                            <th scope="col">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map(({ id, companyName, specialization, startDate, endDate, time, eventName }, index) => (
                                                            <React.Fragment key={id}>
                                                                <tr>
                                                                    <th>
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="product" className="" width="80" />
                                                                    </th><th scope="row">{index + 1}</th>
                                                                    <td>{companyName}</td>
                                                                    <td>{specialization}</td>
                                                                    <td>{formatDate(startDate)}</td>
                                                                    <td>{formatDate(endDate)}</td>
                                                                    <td>{time}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th colSpan="3">
                                                                        <span>Event Name:</span>
                                                                        <span className="badge badge-success">{eventName}</span>
                                                                    </th>
                                                                </tr>
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Foot />
        </div>
    );
}

export default Eventform;
