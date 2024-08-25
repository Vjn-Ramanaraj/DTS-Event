import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
// import QRCode from 'qrcode.react'; 
import './assets/css/s.css';

import Nav from './nav';
import Foot from './foot';

function Email() {
    const [account, setAccount] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("faceAuth")) {
            navigate("/login");
        } else {
            const { account } = JSON.parse(localStorage.getItem("faceAuth"));
            setAccount(account);

            axios.get('http://localhost:5000/getUsers')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching event data:", error);
                });
        }
    }, [navigate]);

    const formatDate = (date) => {
        if (!date) {
            return 'N/A';  // Return a fallback value if date is missing or invalid
        }
        
        const d = new Date(date);
        if (isNaN(d.getTime())) {
            return 'Invalid date';  // Handle invalid date format
        }
        return d.toISOString().split('T')[0];
    };

    if (!account) {
        return null;  // If account is not loaded, don't render anything
    }

    return (
        <div>
            <Nav />
            <div className="main-content">
                <div className="container-fluid content-top-gap">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb my-breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Email</li>
                        </ol>
                    </nav>

                    <div className="container">
                        <div className="mail-box">
                            <aside className="sm-side">
                                <div className="user-head">
                                    <a className="inbox-avatar" href="#">
                                        <img src={account.picture} alt="Profile"/>
                                    </a>
                                    <div className="user-name">
                                        <h5><a href="#">{account.name}</a></h5>
                                        <span><a href="#">{account.email}</a></span>
                                    </div>
                                    <a className="mail-dropdown pull-right" href="#">
                                        <i className="fa fa-chevron-down"></i>
                                    </a>
                                </div>
                                <div className="inbox-body">
                                    <Link to="/compose" className="btn btn-compose">Compose</Link>
                                </div>
                                <ul className="inbox-nav inbox-divider">
                                    <li className="active">
                                        <a href="#"><i className="fa fa-inbox"></i> Inbox <span className="label label-danger pull-right">2</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="lg-side">
                                <div className="inbox-head">
                                    <h1>SentBox</h1>
                                </div>
                                <div className="inbox-body">
                                  
                                    <table className="table table-inbox table-hover">
                                        <tbody>
                                            {data.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="inbox-small-cells">
                                                        <input type="checkbox" className="mail-checkbox"/>
                                                    </td>
                                                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                                                    <td className="view-message dont-show">{item.name}</td>
                                                    <td className="view-message">{item.email}</td>
                                                  
                                                    <td className="view-message text-right">
                                                        {formatDate(item.date)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <Foot />
            </div>
        </div>
    );
}

export default Email;
