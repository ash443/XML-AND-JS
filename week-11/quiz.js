const { getById } = require("../week-10/assignments/assignment/controllers/student");

const users = [

    { username: `user1`, email: `user1@email.com` },
    
    { username: `user2`, email: `user2@email.com` }
    
    ];
    
    
    
    const getUser = (username) =>
    
    Promise((resolve) => {
    
    users.get(getById('username')
    
    });
    
    
    
    const getUsers = (userNames) => {
    
    
    
    };
    
    
    
    const main = () => {
    
    const userNames = [`user1`, `user2`];
    
    
    
    const users = getUsers(userNames);
    
    
    
    console.log(users);
    
    };
    
    
    
    main();