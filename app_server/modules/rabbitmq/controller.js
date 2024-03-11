const getRabbitmqStatusCheck = async(data, reqParams, reqQuery, userCtx) => {
    return await require('../../../index.RabbitMQ')();
}

const showRabbitmqStatusCheck = async(data, reqParams, reqQuery, userCtx) => {
    const input={
        userName : data.userName,
        password : data.password,
        ip : data.ip,
        port : data.port,
    };
    return await require('../../../index.RabbitMQ')(input);
}

module.exports = {
    getRabbitmqStatusCheck,
    showRabbitmqStatusCheck
}