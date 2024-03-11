const fs = require('fs');

const validateRabbitmqInputs = require('./validateargv/rabbitmq');
const validateMysqlInputs = require('./validateargv/mysql');

const redisTest = require('./index.redis');
const rabbitmqTest = require('./index.RabbitMQ');
const mysqlTest = require('./index.mysql');

const DISCRIPTOR = [
    '--service',
    '-s',
    '--username',
    '-u',
    '--password',
    '--pswd',
    '--ip',
    '-i',
    '--port',
    '-P',
    '--help'
];

const argv  = process.argv;

const main = async() => {
    for(let index = 2; index<4; index+=2){
        switch (argv[index]) {
            case DISCRIPTOR[0]:
                {
                    switch (argv[index+1]) {
                        case 'redis':
                            {   
                                const testRedisResult = await redisTest();
                                const redisFailedTest = fs.readFileSync(__dirname+'/redis-failed-test.txt',{encoding:'utf-8'});
                                const cliResult = testRedisResult ? 'Your Redis server is up and Running' : redisFailedTest;
                                console.log(cliResult);
                            }
                            break;
                        case 'rabbitmq':
                            {
                                const rabbitmqFailedtest = fs.readFileSync(__dirname+'/rabbitmq-failed-test.txt',{encoding:'utf-8'})
                                const rabbitmqInputData = validateRabbitmqInputs(argv);
                                if( rabbitmqInputData !== false ){
                                    const testResultRabbitmq = await rabbitmqTest(rabbitmqInputData);
                                    console.table(testResultRabbitmq);
                                }
                                else
                                console.log(rabbitmqFailedtest);
                                break;
                            }
                        case 'mysql':
                            {
                                const mysqlFailedtest = fs.readFileSync(__dirname+'/mysql-failed-test.txt',{encoding:'utf-8'})
                                const mysqlInputData = validateMysqlInputs(argv)
                                if(mysqlInputData !== false){
                                    const testResultMysql = await mysqlTest(mysqlInputData);
                                    console.table(testResultMysql)
                                }
                                else{
                                    console.log(mysqlFailedtest)
                                }
                                break;
                            }        
                        default:
                            console.log('invalid service name!!!!');
                            break;
                    }
                }
                break;
            case DISCRIPTOR[1]:
                {
                    switch (argv[index+1]) {
                        case 'redis':{
                            const testRedisResult = await redisTest();
                            const redisFailedTest = fs.readFileSync(__dirname+'/redis-failed-test.txt',{encoding:'utf-8'});
                            const cliResult = testRedisResult ? 'Your Redis server is up and Running' : redisFailedTest;
                            console.log(cliResult)
                            break;
                        }
                        case 'rabbitmq':                            {
                            const rabbitmqFailedtest = fs.readFileSync(__dirname+'/rabbitmq-failed-test.txt',{encoding:'utf-8'})
                            const rabbitmqInputData = validateRabbitmqInputs(argv);
                            if( rabbitmqInputData !== false ){
                                const testResultRabbitmq = await rabbitmqTest(rabbitmqInputData);
                                console.table(testResultRabbitmq);
                            }
                            else
                            console.log(rabbitmqFailedtest);
                            break;
                        }
                        case 'mysql':{
                            const mysqlFailedtest = fs.readFileSync(__dirname+'/mysql-failed-test.txt',{encoding:'utf-8'})
                            const mysqlInputData = validateMysqlInputs(argv)
                            if(mysqlInputData !== false){
                                const testResultMysql = await mysqlTest(mysqlInputData);
                                console.table(testResultMysql)
                            }
                            else{
                                console.log(mysqlFailedtest)
                            }
                            break;
                        }             
                        default:
                            console.log('invalid service name!!!!');
                            break;
                    }
                }
                break;
            case '--all':
                {
                    const redisTestResult = await redisTest();
                    const rabbitmqTestResult = await rabbitmqTest();
                    const mysqlTestResult = await mysqlTest();

                    console.log(redisTestResult?'Redis Connected':'Redis not running!!!')
                    console.log(`RabbitMQ:`)
                    console.table(rabbitmqTestResult)
                    console.log(`MYSQL:`)
                    console.table(mysqlTestResult)
                }
                break
            case DISCRIPTOR[10]:
                console.log(fs.readFileSync(__dirname+'/flow.txt',{encoding:'utf-8'}));
                break;
            default:
                console.log(fs.readFileSync(__dirname+'/flow.txt',{encoding:'utf-8'}));
                break;
        }
    }
}

main();
