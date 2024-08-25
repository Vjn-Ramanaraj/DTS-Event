import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import emailjs from 'emailjs-com';
import './assets/css/r.css';
import Nav from './nav';
import Foot from './foot';

function Compose() {
  const [account, setAccount] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    } else {
      const { account } = JSON.parse(localStorage.getItem("faceAuth"));
      setAccount(account);

      // Fetch user data
      axios.get('http://localhost:5000/attendees')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [navigate]);

  const handleSendMail = async (event, recipient) => {
    event.preventDefault();

    const subject = `Welcome to ${account.eventName}`;
    const message = `Hello ${recipient.name},\n\nDTS Event Organizers welcome you to the event ${account.eventName}. Details will be provided in the QR code attached below.`;

    try {
      const response = await emailjs.send('service_esfprms', 'template_6vp08bq', {
        to_name: recipient.name,
        from_name: account.name,
        message: message,
        to_email: recipient.email,
        from_email: account.email,
        subject: subject
      }, 'v6Th9zqMdyv6oP2mh');

      console.log('EmailJS Response:', response);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  if (!account) {
    return null;
  }

  return (
    <div>
      <Nav />
      <div className="main-content">
        <div className="container-fluid content-top-gap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Email</li>
            </ol>
          </nav>

          <div className="container">
            <div className="mail-box">
              <aside className="sm-side">
                <div className="user-head">
                  <a className="inbox-avatar" href="#">
                    <img src={account.picture} alt="Profile" />
                  </a>
                  <div className="user-name">
                    <h5><a href="#">{account.name}</a></h5>
                    <span><a href="#">{account.email}</a></span>
                  </div>
                </div>
                {/* <div className="inbox-body">
                  <Link to="/compose" className="btn btn-compose">Compose</Link>
                </div> */}
                <br></br>
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
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>
                            <button className="btn btn-compose" onClick={(e) => handleSendMail(e, item)}>Send Mail</button>
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

export default Compose;
