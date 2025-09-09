
const axios = require('axios').default;

async function getUsers() {
  try {
    // const response = await axios.get(`https://reqres.in/api/users`);

    const response = await axios.get('https://trends.google.com/home?geo=DO&hl=en-US');
    console.log('Response received from Google Trends:');
    console.log('Status Code:', response.status);
    console.log('Headers:', response.headers);
    console.log('Response Data:', response.data);
    console.log('Full Response Object:');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUsers()