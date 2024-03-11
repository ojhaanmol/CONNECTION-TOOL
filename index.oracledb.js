const oracledb = require('oracledb');

module.exports = (input = {}) => {

  return new Promise((resolve, reject) => {
    const user = input.user || 'CANARA_FISTACK';
    const password = input.password || 'CANARA_FISTACK';
    const host = input.host || '10.10.30.130';
    const port = input.port || 1521;
    const serviceName = input.servicename || 'orcl';
    const connectionDetails = {
      user : user,
      password: password,
      connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVICE_NAME=${serviceName})))`
    }

    oracledb.getConnection(connectionDetails)
    .then(log => { return resolve({user,password,host,port,serviceName,connection_status:"connected"})})
    .catch(error => {
        console.error(error);
        return resolve({user,password,host,port,serviceName,connection_status:"not Connected"})
    });
  });
}