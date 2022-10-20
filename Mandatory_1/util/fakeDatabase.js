export let users = [{
        id:0,
        name: "TestUser",
        email: "test@email.com",
        password: "test123",
        role:"ADMIN"
    }]

export let documentation =[
    {
        id: 0,
        titleName:"Home-page",
        text:`
        <h2>JavaScript</h2>
        <p>JavaScript is a dynamic computer programming language. </p>
        <h2>Node.js</h2>
        <p>Node.js is an open-source, JavaScript runtime environment. By using chromes V8 JavaScript engine Node.js makes it possible to run network applications using JavaScript.
        To run a Node application you run the followin command: <br><i>node [JavaSript file name]</i><br>Usually the script is called app.js</p>
        <h4>Package.json</h4>
        <p>Package.json is a fundamental part of Node.js ecosystem, </p>
        <h2>Nodemon</h2>
        <p>nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
        nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.</p>
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