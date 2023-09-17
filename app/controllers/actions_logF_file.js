const { write } = require('@popperjs/core')
const dbUsers = require('../../DAL/get_users_from_db')
const jf  = require('jsonfile')

const writeActionsLogFile = async (id) => {
    const usersData = await dbUsers()
    let data = usersData.find((user) => user._id === id)

// the current date

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Add 1 to get the real month (1-12)
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;



    const obj = {
        "id": data.externalId,
        "maxActions": data.maximumOfActions,
        "date": formattedDate,
        "actionAllowed": data.numberOfActions
    }

    writingActionsLogFile(obj)

}


const writingActionsLogFile = async (obj) => {
    try {

        // Define the path to your JSON file
        const filePath = './json/actions.json';

        // Read existing data from the file (if it exists)
        let existingData = { actins: [] };
        try {
            existingData = await jf.readFile(filePath);
        } catch (readErr) {
            // Handle errors if the file doesn't exist or is not valid JSON
            console.error('Error reading the file:', readErr);
        }

        // Add the new action data to the "actins" array
        existingData.actins.push(obj);

        // Write the merged data back to the file
        try {
            await jf.writeFile(filePath, existingData, { spaces: 2 });
            console.log('Data has been written to the file successfully.');
        } catch (writeErr) {
            console.error('Error writing the file:', writeErr);
        }
    } catch (error) {
        console.error('Error:', error);
    }

}

module.exports = writeActionsLogFile