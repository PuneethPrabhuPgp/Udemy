const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0)
    throw error0;

  connection.createChannel((error1, channel) => {
    var queue = 'task_queue';

    channel.assertQueue(queue, { durable: true });

    channel.consume(queue, (msg) => {
      var secs = msg.content.toString().split('.').length - 1;

      console.log('Recieved:', msg.content.toString());

      setTimeout(() => { console.log('Done') }, secs * 1000);

    }, { noAck: true });

  });

});
