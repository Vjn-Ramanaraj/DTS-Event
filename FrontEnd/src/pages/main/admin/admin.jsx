/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './assets/css/s.css';
import Nav from './nav';
import Foot from './foot';
import Chart from 'chart.js/auto';

function Admin() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, [navigate]);

  useEffect(() => {
    if (account) {
      // Bar chart setup
      const ctxBar = document.getElementById('barchart');
      if (ctxBar) {
        new Chart(ctxBar.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Monthly Sales',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }

      // Line chart setup
      const ctxLine = document.getElementById('linechart');
      if (ctxLine) {
        new Chart(ctxLine.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Monthly Visitors',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, [account]);

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
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>

        <div className="welcome-msg pt-3 pb-4">
          <h1>Hi <span className="text-primary">{account.name}</span>, Welcome back</h1>
          <p>Very detailed & featured admin.</p>
        </div>

        <div className="statistics">
          <div className="row">
            <div className="col-xl-6 pr-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"></i>
                    <h3 className="text-primary number">29.75 M</h3>
                    <p className="stat-text">Total Users</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-eye"></i>
                    <h3 className="text-secondary number">51.25 K</h3>
                    <p className="stat-text">Daily Visitors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pl-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cloud-download"></i>
                    <h3 className="text-success number">166.89 M</h3>
                    <p className="stat-text">Downloads</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cart"></i>
                    <h3 className="text-danger number">1,250k</h3>
                    <p className="stat-text">Purchased</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
          <div className="row">
            <div className="col-lg-6 pr-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">
                  Bar Chart
                </div>
                <div className="card-body">
                  <div id="container">
                    <canvas id="barchart" width="600" height="400"></canvas>
                  </div>
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">
                  Line Chart
                </div>
                <div className="card-body">
                  <div id="container">
                    <canvas id="linechart" width="600" height="400"></canvas>
                  </div>
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Admin;
