const axios = require('axios');
const url = 'http://localhost:3000/users';

const getUsers = async () => {
    try {
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        console.error('Error:', error);
    }
};

module.exports = getUsers