import React, { useEffect, useState } from 'react';
import './Covid.css';

function Covid() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://data.covid19india.org/data.json')
            .then(response => response.json())
            .then(data => setData(data.statewise[0]));
    }, []);

    return (
        <div className="container pb-5">
            <h1 className="text-center mt-5 mb-5 text-danger">Covid-19 Live Tracker</h1>
            <div className="card-group text-center">
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Country</h5>
                        <h1 className="card-text">India</h1>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Active</h5>
                        <h1 className="card-text">{data.active}</h1>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Confirmed</h5>
                        <h1 className="card-text">{data.confirmed}</h1>
                    </div>
                </div>
            </div>

            <div className="card-group text-center">
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Recovered</h5>
                        <h1 className="card-text">{data.recovered}</h1>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Deaths</h5>
                        <h1 className="card-text">{data.deaths}</h1>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="card-body">
                        <h5 className="card-title">Latest Update</h5>
                        <h1 className="card-text">{data.lastupdatedtime}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Covid;
