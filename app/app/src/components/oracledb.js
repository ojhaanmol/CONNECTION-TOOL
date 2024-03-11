import React,{useState} from "react";

import './component.css';

const Oracledb = () => {
    const fetchOracledbStatus = () => {
        fetch('http://localhost:12300/fetchOracledbStatus')
        .then(resp => resp.json())
        .then(out => {
            setOracledbStatus(out.data.connection_status);
            setOracledbHost(out.data.host);
            setOracledbUser(out.data.user);
            setOracledbPassword(out.data.password);
            setOracledbServiceName(out.data.serviceName);
            setOracledbPort(out.data.port);
        })
    }
    const [getOracledbStatus,setOracledbStatus] = useState('');
    const [getOracledbHost,setOracledbHost] = useState('');
    const [getOracledbUser,setOracledbUser] = useState('');
    const [getOracledbPassword,setOracledbPassword] = useState('');
    const [getOracledbServiceName,setOracledbServiceName] = useState('');
    const [getOracledbPort,setOracledbPort] = useState('');
    return (
        <div className="Oracledb components">
            <button onClick={fetchOracledbStatus}>Check Oracledb Connection</button>
            <table>
                 <tr>
                    <td>Connection status</td>
                    <td>{getOracledbStatus}</td>
                </tr>
                <tr>
                    <td>Host</td>
                    <td>{getOracledbHost}</td>
                </tr>
                <tr>
                    <td>Port</td>
                    <td>{getOracledbPort}</td>
                </tr>
                <tr>
                    <td>User</td>
                    <td>{getOracledbUser}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{getOracledbPassword}</td>
                </tr>
                <tr>
                    <td>Service Name</td>
                    <td>{getOracledbServiceName}</td>
                </tr>
            </table>
        </div>
    )
}

export default Oracledb;