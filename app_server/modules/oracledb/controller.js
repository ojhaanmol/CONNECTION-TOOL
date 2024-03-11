const getOracledbStatusCheck = async(data, reqParams, reqQuery, userCtx) => {
    return await require('../../../index.oracledb')();
}

const showOracledbStatusCheck = async(data, reqParams, reqQuery, userCtx) => {
    const input={
    user : data.user,
    password : data.password,
    host : data.host,
    port : data.port,
    serviceName : data.servicename}
    return await require('../../../index.oracledb')(input);
} 

module.exports = {
    getOracledbStatusCheck,
    showOracledbStatusCheck
}