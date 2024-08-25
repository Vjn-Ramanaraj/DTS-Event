/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './assets/css/r.css';
import './assets/css/s.css';
import Nav from './nav';
import Foot from './foot';

function Price() {
  const [pricingPlans, setPricingPlans] = useState([
    { title: "Standard Pass", price: "$20.99", features: ["Access to all main sessions", "Networking opportunities", "Digital seminar materials", "Refreshments during breaks", "Swags"] },
    { title: "Premium Pass", price: "$40.99", features: ["Everything in the Standard Pass", "Reserved seating in main sessions", "Access to exclusive breakout sessions", "Seminar swag bag", "Lunch with industry leaders"] },
    { title: "VIP Pass", price: "$60.99", features: ["Everything in the Premium Pass", "Early entry to the seminar", "Meet-and-greet with keynote speakers", "Priority registration and check-in", "Exclusive networking dinner with VIPs and speakers"] }
  ]);

  const handleTextChange = (e, planIndex, featureIndex) => {
    const value = e.target.value;
    const newPricingPlans = [...pricingPlans];

    if (featureIndex === undefined) {
      newPricingPlans[planIndex].title = value;
    } else if (featureIndex === null) {
      newPricingPlans[planIndex].price = value;
    } else {
      newPricingPlans[planIndex].features[featureIndex] = value;
    }

    setPricingPlans(newPricingPlans);
  };

  const editableTextStyle = {
    border: 'none',
    background: 'transparent',
    textAlign: 'center',
    width: '100%',
    padding: '0',
    margin: '0',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit'
  };

  return (
    <div className="main-content">
      <Nav />
      <div className="container-fluid content-top-gap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Price</li>
          </ol>
        </nav>

        <section className="pricing-tables">
          <div className="container">
            <div className="main-title text-center">
              <h1>Pricing Tables</h1>
              <p>Choose your Plan hear.</p>
            </div>
            <div className="row">
              {pricingPlans.map((plan, planIndex) => (
                <div className="col-sm-12 col-lg-4 col-md-4" key={planIndex}>
                  <div className="pricing">
                    <div className="price-header">
                      <div className="title">
                        <input
                          type="text"
                          value={plan.title}
                          onChange={(e) => handleTextChange(e, planIndex)}
                          style={editableTextStyle}
                        />
                      </div>
                      <div className="price">
                        <input
                          type="text"
                          value={plan.price}
                          onChange={(e) => handleTextChange(e, planIndex, null)}
                          style={editableTextStyle}
                        />
                      </div>
                    </div>
                    <div className="content">
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => handleTextChange(e, planIndex, featureIndex)}
                              style={editableTextStyle}
                            />
                          </li>
                        ))}
                      </ul>
                      <div className="button1"><a href="#" className="btn btn-outline pricing-btn">Get Started</a></div>
                      <br />
          
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Foot />
    </div>
  );
}

export default Price;
