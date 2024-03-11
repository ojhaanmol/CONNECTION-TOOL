const redis = require('redis');


module.exports = async(input = {}) => {
    const client = redis.createClient();
    try {
        await client.connect();
        const result = await client.ping();
        client.quit();
        return result ? true:false;
    }catch(e){
        client.quit();
        return false
    }
}