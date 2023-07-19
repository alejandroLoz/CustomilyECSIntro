const axios = require('axios');

const consumerUrl = process.env.CONSUMER_URL;
const delayMs = 1000; // Delay between each message production in milliseconds
let counter = 0;

function produceMessage() {  
  const message = `Message ${counter}`; // Add counter to the message
  
  axios.post(consumerUrl, { message })    
    .catch(error => {      
      console.log('Error sending message:', error.message);      
    });
  
  console.log(`Message ${counter} sent`);
  setTimeout(produceMessage, delayMs);

  counter++; // Increment the counter
}
produceMessage();
