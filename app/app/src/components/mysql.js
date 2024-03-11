import React,{useState} from "react";

import './component.css';

const Mysql = () => {

    const [formData, setFormData] = useState({});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchMysqlStatus = (e) => {
        e.preventDefault();
        fetch('http://localhost:12300/mysqlStatus',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(out => {
            setMysqlStatus(out.data.Connection_status);
            setMysqlHost(out.data.host);
            setMysqlUser(out.data.user);
            setMysqlPassword(out.data.password);
            setMysqlDatabase(out.data.database)
        })
    }
    const [getMysqlStatus,setMysqlStatus] = useState('');
    const [getMysqlHost,setMysqlHost] = useState('');
    const [getMysqlUser,setMysqlUser] = useState('');
    const [getMysqlPassword,setMysqlPassword] = useState('');
    const [getMysqlDatabase,setMysqlDatabase] = useState('');
    return (
        <div className="mysql components">
            <form onSubmit={fetchMysqlStatus}>
                <lable for='host'>Host</lable>
                <input id='host' placeholder="Enter Host" onChange={handleInputChange} name="host"></input>
                <lable for='user'>User</lable>
                <input id='user' placeholder="Enter User" onChange={handleInputChange} name='user'></input>
                <lable for='password'>Password</lable>
                <input id='password' placeholder="Enter Password" type="password" onChange={handleInputChange} name="password"></input>
                <label for='database'>Database</label>
                <input id='database' placeholder="Enter Database" onChange={handleInputChange} name="database"></input>
                <button type="submit">Check Mysql Connection</button>
            </form>
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

export default Mysql;