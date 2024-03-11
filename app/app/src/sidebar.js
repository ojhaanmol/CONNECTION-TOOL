import React from "react";

import './sidebar.css'

import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <h2>Connect Status</h2>
            <Link className="Link" to="/rabbitmq">
                <p>RabbitMQ</p>
            </Link>
            <Link className="Link" to="/redis">
                <p>Redis</p>
            </Link>
            <Link className="Link" to="/mysql">
                <p>Mysql</p>
            </Link>
            <Link className="Link" to="/oracledb">
                <p>Oracledb</p>
            </Link>
            <Link className="Link" to="/all">
                <p>All</p>
            </Link>
        </div>
    );
}

export default Sidebar;