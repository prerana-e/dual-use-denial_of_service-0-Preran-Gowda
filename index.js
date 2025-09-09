const https = require('https'); 

const options = {
  hostname: 'trends.google.com',
  path: '/home?geo=DO&hl=en-US',
  method: 'GET'
};

// const options = {
//   hostname: 'localhost',
//   port: 8000,
//   path: '/ui',
//   method: 'GET'
// };

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  console.log(`Status Code: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  console.log('Response is being received...');

  res.on('end', () => {
    console.log('Response received:', JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();

console.log('HTTP request initiated (non-blocking)');