import React,{useState} from "react";

import './component.css';

const All = () => {

    const [getRedisStatus, setRedisStatusRedis] = useState("");

    const [getStatusRabbitmq, SetStatusRabbitmq] = useState("");
    const [getUsernameRabbitmq, setUsernameRabbitmq] = useState("");
    const [getPasswordRabbitmq, setPasswordRabbitmq] = useState("");
    const [getIpRabbitmq, setIpRabbitmq] = useState("");
    const [getPortRabbitmq, setPortRabbitmq] = useState("");

    const [getOracledbStatus, setOracledbStatus] = useState("");
    const [getOracledbHost, setOracledbHost] = useState("");
    const [getOracledbUser, setOracledbUser] = useState("");
    const [getOracledbPassword, setOracledbPassword] = useState("");
    const [getOracledbServiceName, setOracledbServiceName] = useState("");
    const [getOracledbPort, setOracledbPort] = useState("");

    const [getMysqlStatus, setMysqlStatus] = useState("");
    const [getMysqlHost,setMysqlHost] = useState("");
    const [getMysqlUser, setMysqlUser] = useState("");
    const [getMysqlPassword, setMysqlPassword] = useState("");
    const [getMysqlDatabase, setMysqlDatabase] = useState("");


    const fetchAllFunctions = () => {


        fetch('http://localhost:12300/fetchRedisStatus')
        .then(resp => resp.json())
        .then(out => {
            setRedisStatusRedis(out.data === true? "connected" : "not connected");
        });

        fetch('http://localhost:12300/fetchRabbitmqStatus')
        .then(resp => resp.json())
        .then(out => {
            SetStatusRabbitmq(out.data['connection status']);
            setUsernameRabbitmq(out.data.username);
            setPasswordRabbitmq(out.data.password);
            setIpRabbitmq(out.data.ip);
            setPortRabbitmq(out.data.port);
        });

        fetch('http://localhost:12300/fetchOracledbStatus')
        .then(resp => resp.json())
        .then(out => {
            setOracledbStatus(out.data.connection_status);
            setOracledbHost(out.data.host);
            setOracledbUser(out.data.user);
            setOracledbPassword(out.data.password);
            setOracledbServiceName(out.data.serviceName);
            setOracledbPort(out.data.port);
        });

        fetch('http://localhost:12300/mysqlStatus')
        .then(resp => resp.json())
        .then(out => {
            setMysqlStatus(out.data.Connection_status);
            setMysqlHost(out.data.host);
            setMysqlUser(out.data.user);
            setMysqlPassword(out.data.password);
            setMysqlDatabase(out.data.database);
        })
    }

    return (
        <div className="all components">
            
            <button onClick={fetchAllFunctions}>Check Connection</button>
            <table>
                <tr>
                    <td>Connection status</td>
                    <td>{getRedisStatus}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <td>Status</td>
                    <td>{getStatusRabbitmq}</td>
                </tr>
                <tr>
                    <td>username</td>
                    <td>{getUsernameRabbitmq}</td>
                </tr>
                <tr>
                    <td>ip</td>
                    <td>{getIpRabbitmq}</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>{getPasswordRabbitmq}</td>
                </tr>
                <tr>
                    <td>port</td>
                    <td>{getPortRabbitmq}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{getStatusRabbitmq}</td>
                </tr>
            </table>

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

            <table>
                <tr>
                    <td>Connection status</td>
                    <td>{getMysqlStatus}</td>
                </tr>
                <tr>
                    <td>Host</td>
                    <td>{getMysqlHost}</td>
                </tr>
                <tr>
                    <td>User</td>
                    <td>{getMysqlUser}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{getMysqlPassword}</td>
                </tr>
                <tr>
                    <td>Database</td>
                    <td>{getMysqlDatabase}</td>
                </tr>
            </table>

        </div>
    )
}

export default All;