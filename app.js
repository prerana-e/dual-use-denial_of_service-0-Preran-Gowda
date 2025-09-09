
const axios = require('axios').default;

async function getUsers() {
  try {
    const response = await axios.get(`https://reqres.in/api/users`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getUsers()