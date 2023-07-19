const express = require('express');
const { Pool } = require('pg');
//vamo

const app = express();
const port = process.env.LISTENING_PORT;
let processingDelayMs = 5000; // Delay between each message consumption in milliseconds
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const queue = [];
let messageInProcess = false;

app.use(express.json());

app.post('/', (req, res) => {
  const message = req.body.message;  
  // Process the message here
  queue.push(message);  
  // Make sure we process a single message at a time
  if (queue.length && !messageInProcess){
    messageInProcess = true;
    setTimeout(async() => {
      messageFromQueue = queue.shift();
      await pool.query('INSERT INTO messages (message) VALUES ($1)', [messageFromQueue]);
      console.log('Processed NEW message:', messageFromQueue);
      messageInProcess = false;
    }, processingDelayMs);    
  }
  res.sendStatus(200);
});

app.get('/', (req, res) => { 
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Consumer listening port ${port}`);
});
