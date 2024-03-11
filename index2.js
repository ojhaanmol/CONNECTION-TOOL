const stdin = require('./stdin');

const testRedis = require('./index.redis');
const testRabbitmq = require('./index.RabbitMQ');
const testMysql = require('./index.mysql');

const main = async()=> {
    try{
        let input ={}
        const service = await stdin('Provide Service Name:  ');
        switch (service) {
            case 'mysql':
                {
                    input.host = await stdin('Provide Host name[DEFAULT : 0.0.0.0]:    ');console.clear();
                    input.user = await stdin('Provide User name[DEFAULT : root]:    ');console.clear();
                    input.password = await stdin('Provide Password[DEFAULT : root]:    ');console.clear();
                    input.database = await stdin('Provide Database[DEFAULT : alap]:    ');console.clear();
                    const result = await testMysql(input);
                    console.table(result)
                }
                break;
            case 'redis':
                {
                    const result = await testRedis();
                    console.table(result);
                }
                break;
            case 'rabbitmq':
                {
                    input.userName = await stdin('Provide User name[DEFAULT : null]:    ');console.clear();
                    input.password = await stdin('Provide password[DEFAULT : null]:    ');console.clear();
                    input.ip = await stdin('Provide ip[DEFAULT : null]:    ');console.clear();
                    input.port = await stdin('Provide port[DEFAULT : null]:    ');console.clear();
                    const result = await testRabbitmq(input);
                    console.table(result)
                }
                break;
            
            case 'all':
                {
                    const inputRabbit ={};
                    const inputMysql ={};

                    inputMysql.host = await stdin('Provide Host name for Mysql:    ');console.clear();
                    inputMysql.user = await stdin('Provide User name for Mysql:    ');console.clear();
                    inputMysql.password = await stdin('Provide Password for Mysql:    ');console.clear();
                    inputMysql.database = await stdin('Provide Database for Mysql:    ');console.clear();
                    const resultMysql = await testMysql(inputMysql);

                    const result = await testRedis();

                    inputRabbit.userName = await stdin('Provide User name for RabbitMQ:    ');console.clear();
                    inputRabbit.password = await stdin('Provide password for RabbitMQ:    ');console.clear();
                    inputRabbit.ip = await stdin('Provide ip for RabbitMQ:    ');console.clear();
                    inputRabbit.port = await stdin('Provide port for RabbitMQ:    ');console.clear();
                    const resultRabbit = await testRabbitmq(inputRabbit);

                    console.log('RABBITMQ:');
                    console.table(resultRabbit)

                    console.log('REDIS:');
                    console.log(result?'Redis Connected':'Redis not Connected');

                    console.log('MYSQL:')
                    console.table(resultMysql)
                }
                break
        
            default:
                console.log('invalid service name!!!');
                break;
        }
    }catch(e){
        console.log("Error in main",e)
    }
}
main();