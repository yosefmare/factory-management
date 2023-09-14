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
        await UsersModel.create({
            fullName: data.name,
            externalId: data.id,
            numberOfActions: 0,
        });
    }
};

module.exports = usersChecker