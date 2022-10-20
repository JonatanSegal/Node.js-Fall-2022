export let users = [{
        name: "TestUser",
        email: "test@email.com",
        password: "test123"
    }]

export let documentation =[
    {
        id: 0,
        titleName:"Home-page",
        text:`
        <h2>Node.js</h2>
        <p>TODO</p>
        <h2>Nodemon</h2>
        <p>TODO</p>
        `
    },
    {
        id: 1,
        titleName:"Express-page",
        text:`
        <h2>Express framework</h2>
        <p>TODO</p>
        `
    },
    {
        id: 2,
        titleName:"Rendering-page",
        text:`
        <h2>Rendering</h2>
        <h3>Server side rendering</h3>
        <p>TODO</p>
        <h3>Client side rendering</h3>
        <p>TODO</p>
        `
    }
]


export function getUser(email) {
    const foundUser = users.find(user => user.email === email)   
    if(!foundUser) {
        alert("User not found");
    } else {
        alert("You logged in");
        return foundUser 
    }  
}