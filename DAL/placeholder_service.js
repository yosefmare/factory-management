const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users';

const getInfo = async () => {
    try {
        const { data } = await axios.get(url);
        const filteredData = data.filter((user) => user)

        const filteredProperties = filteredData.map((user) => {
            const { id, name, username, email } = user;
            return { id, name, username, email }
        })
        return filteredProperties

    } catch (error) {
        console.error('Error:', error);
    }
};



module.exports = getInfo
