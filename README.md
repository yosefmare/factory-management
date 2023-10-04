# Factory Management System

This is a Factory Management System that allows you to manage your factory operations efficiently. Users can log in using their credentials from the JSON Placeholder website you can use the user name end email from this link: https://jsonplaceholder.typicode.com/users . Once logged in, users can perform various operations, such as adding employees, managing shifts, and more.
Use Postman to send the requests or any other API client GUI




## Technologies Used

- Mongoose
- Express.js
- Axios
- JSON File
- nodemon
- cors
- dotenv

## Getting Started

1. Clone the repository:

``` bash
   git clone https://github.com/yosefmare/factory-management.git
```

2. install the packages by run

```bash
npm i
```

   3. Install nodemon globally (if not already installed)

 ``` bash
   npm install -g nodemon
   ```

   4. Start the server by run
``` bash
   npm start
   ```

   5. Access the application at http://localhost:3000

   ## Features
    - User authentication using JSON Placeholder credentials.
    - Add and manage (you can do all the crud operations) on employees, shifts, departments
    - when you log in with user name and email automatically new user be added in the DB
    - you can't delete users or shifts
    - when you send a put request to update num of actions for the user automatically his information be written in the actions.json file


