import React,{useState} from "react";

import './component.css';

const Redis = () => {
    const fetchRedisStatus = () => {
        fetch('http://localhost:12300/fetchRedisStatus')
        .then(resp => resp.json())
        .then(out => {
            setRedisStatus(out.data === true? "connected" : "not connected");
        })
    }
    const [getRedisStatus,setRedisStatus] = useState('')
    return (
        <div className="redis components">
            
            <button onClick={fetchRedisStatus}>Check Redis Connection</button>
            <table>
                <tr>
                    <td>Connection status</td>
                    <td>{getRedisStatus}</td>
                </tr>
            </table>
        </div>
    )
}

export default Redis;