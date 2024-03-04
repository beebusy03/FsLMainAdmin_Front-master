import React, { useEffect } from 'react'
import '../css/dashboard.css'
import $ from 'jquery';
import { RiFileCloseFill } from 'react-icons/ri';
import { FaHandHoldingMedical, FaFileContract } from 'react-icons/fa';
const Dashboard = () => {
    const userid = localStorage.getItem('username');
    const apicert = `${process.env.REACT_APP_API_PREFIX}/user/dashboardcounter/getdashboardcounter/${userid}`;

    useEffect(() => {

        $(this).prop('Counter', 0).animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );

    }, [userid]);

    return (
            <div className="row mt-3">
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="counter">
                        <div className="counter-icon">
                            <FaHandHoldingMedical className="i" />
                        </div>
                        <div className="counter-content">
                            <h4>Receipt</h4>
                            <span className="counter-value" id="Receipt"></span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="counter blue">
                        <div className="counter-icon">
                        <FaFileContract className="i" />
                        </div>
                        <div className="counter-content">
                            <h4>Report Entry</h4>
                            <span className="counter-value" id="Report"></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="counter gray">
                        <div className="counter-icon">
                            <RiFileCloseFill className="i" />
                        </div>
                        <div className="counter-content">
                            <h4>Despatch Entry</h4>
                            <span className="counter-value" id="Despatch"></span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard
