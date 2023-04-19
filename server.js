const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');

// Create a server to receive POST requests from SNS
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (data.Type === 'SubscriptionConfirmation') {
          const subscribeUrl = data.SubscribeURL;
          console.log('Received subscription confirmation message:', data);
          console.log('Visit this URL to confirm subscription:', subscribeUrl);
        } else {
          console.log('Received message:', data);
        }
        res.end('OK');
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.statusCode = 400;
        res.end('Bad Request');
      }
    });
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

