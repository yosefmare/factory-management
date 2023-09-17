const dbUsers = require('../../DAL/get_users_from_db')
const UsersModel = require('../../models/User_schema')


const usersChecker = async (data) => {
    const users = await dbUsers();
    let userExists = false;

    for (const usersData of users) {
        if (data.name === usersData.fullName) {
            userExists = true;
            break;
        }
    }

    if (!userExists) {
        // generate random numbers between 4 and 7
        let randomNumber = Math.floor(Math.random() * 4) + 4;
        // generate random numbers between 4 and 7

        // add user to DB
        await UsersModel.create({
            fullName: data.name,
            externalId: data.id,
            numberOfActions: 0,
            maximumOfActions: randomNumber,
        });
    }
};

module.exports = usersChecker