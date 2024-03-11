const getRedisStatusCheck = async(data, reqParams, reqQuery, userCtx) => {
    return await require('../../../index.redis')();
}

module.exports = {
    getRedisStatusCheck
}