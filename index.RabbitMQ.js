const amqp = require('amqplib');

module.exports = async(input = {}) => {

  const userName = input.userName;
  const password = input.password;
  const ip = input.ip;
  const port = input.port;
  try{
    const connectionURL = `amqp://${userName?userName:''}:${password?password:''}@${ip?ip:'localhost'}:${port?port:''}`;

    const connection = await amqp.connect(connectionURL);
    if(connection){
      connection.close()
      return {
        username : userName || 'NA',
        password : password || 'NA',
        ip : ip || 'NA',
        port : port || 'NA',
        'connection status': `connected`
      };
    }else{
      return {
        username : userName  || 'NA',
        password : password || 'NA',
        ip : ip || 'NA',
        port : port || 'NA',
        'connection status': `not connected`
      };
    }
    
  }catch(e){
    return {
      username : userName || 'NA',
      password : password || 'NA',
      ip : ip || 'NA',
      port : port || 'NA',
      'connection status': `not connected`
    };
  }
}








// const amqp = require('amqplib');

// const rabbitmqUrl = 'amqp://username:password@localhost'; // Replace with your RabbitMQ URL and credentials

// async function testConnection() {
//   try {
//     const connection = await amqp.connect(rabbitmqUrl);
//     console.log('Connection to RabbitMQ successful!');
//     await connection.close();
//   } catch (error) {
//     console.error('Error connecting to RabbitMQ:', error.message);
//   }
// }

// testConnection();
