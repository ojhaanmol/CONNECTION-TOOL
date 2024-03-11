const mysqlTest = require('../../../index.mysql');

const showMysqlTest = async(data, reqParams, reqQuery, userCtx) => {
    const input = {
        host: data.host,
        user: data.user,
        password: data.password,
        database: data.database
    }
    return await mysqlTest(input);
}

const getMysqlTest = async(data, reqParams, reqQuery, userCtx) => {
    return await mysqlTest();
}

module.exports = {
    getMysqlTest,
    showMysqlTest
}