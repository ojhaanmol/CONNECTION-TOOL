import React,{useState} from "react";

import './component.css';

const Rabbitmq = () => {
    const fetchRabbitmqStatus = () => {
        fetch('http://localhost:12300/fetchRabbitmqStatus')
        .then(resp => resp.json())
        .then(out => {
            SetStatus(out.data['connection status']);
            setUsername(out.data.username);
            setPassword(out.data.password);
            setIp(out.data.ip);
            setPort(out.data.port);
        });
    }
    const [getStatus,SetStatus] = useState('');
    const [getUsername,setUsername] = useState('')
    const [getIp,setIp] = useState('')
    const [getPort,setPort] = useState('')
    const [getPassword,setPassword] = useState('')
    return (
        <div className="rabbitmq components">
            <button onClick={fetchRabbitmqStatus}>Check Rabbitmq Status</button>
            {/* username:    {getUsername},
            ip:  {getIp},
            password:    {getPassword},
            port:    {getPort},
            Status:  {getStatus}, */}
            <table>
                <tr>
                    <td>username</td>
                    <td>{getUsername}</td>
                </tr>
                <tr>
                    <td>ip</td>
                    <td>{getIp}</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>{getPassword}</td>
                </tr>
                <tr>
                    <td>port</td>
                    <td>{getPort}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{getStatus}</td>
                </tr>
            </table>
        </div>
    )
}

export default Rabbitmq;