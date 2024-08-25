/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import './assets/css/s.css'

 import s2 from './assets/images/profileimg.jpg'


import Nav from './nav'
import Foot from './foot'
function Rsvp() {
  return (




<div className="main-content">
<Nav/>
<div className="container-fluid content-top-gap">

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Participants</li>
      </ol>
    </nav>

    <div className="container6">

<h1 className="title"> Edit Pricing Tables</h1>

<div className="grid">
  <div className="form-group a">
    <label htmlFor="name">Name</label>
    <input id="name" type="text"/>
  </div>

  <div className="form-group b">
    <label htmlFor="first-name">Prénom</label>
    <input id="first-name" type="text"/>
  </div>

  <div className="form-group email-group">
    <label htmlFor="email">Email</label>
    <input id="email" type="text"/>
  </div>

  <div className="form-group phone-group">
    <label htmlFor="phone">Téléphone (mobile)</label>
    <input id="phone" type="text"/>
  </div>

  <div className="textarea-group">
    <label htmlFor="bio">Bio</label>
    <textarea id="bio"></textarea>
  </div>

  <div className="form-group">
    <label htmlFor="address">Adresse</label>
    <input id="address" type="text"/>
  </div>

  <div className="form-group">
    <label htmlFor="city">Ville</label>
    <input id="city" type="text"/>
  </div>

  <div className="form-group">
    <label htmlFor="zip">Code postal</label>
    <input id="zip" type="text"/>
  </div>
</div>
{/* 
<div className="checkboxes">

  <div className="checkbox-group">
    <input id="newsletter" type="checkbox"/>
    <label htmlFor="newsletter">Je souhaite recevoir la newsletter</label>
  </div>

  <div className="checkbox-group">
    <input id="newsletter-partners" type="checkbox"/>
    <label htmlFor="newsletter-partners">Je souhaite recevoir la newsletter des partenaires</label>
  </div>

</div> */}

<div className="button-container">
  <button className="button">Edit</button>
</div>
</div>

   
    </div>
    <Foot/>
    </div> 
 
 



   
   
  );
}

export default Rsvp;




