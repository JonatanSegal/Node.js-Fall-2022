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
        <p>Node.js is an open-source, JavaScript runtime environment, that uses chromes V8 JavaScript engine to make it possible to run network applications using JavaScript.
        <br>To run a Node application you run the following command: <br><i>node [JavaSript file name]</i><br>Usually the script is called app.js</p>
        
        <h4>Package.json</h4>
        <p>Package.json is a fundamental part of Node.js ecosystem, package.json is used to store meatadata about the project aswell as a list of dependencies and scripts.
        <br>Example of how a package.json might look:
        <br><img src="../components/images/jsonpackage.png">

        <br><b>Meta data:</b> is data about the application, e.g. "name" or "type".

        <br><b>Dependencies:</b> can be code libary or a package that is needed for the node application to work. When typing <i>npm install</i> in the terminal, package.json is scanned and the relevant files are installed/downloaded.
        <br>In the picture above we see a <i>key:value</i> pair under dependencies, this indicates that the application uses <i><a href="express" class="link-primary">express</a></i> since that is the key, the vaule is the number that indicates what version of express the application uses.
        
        <br><b>Scripts:</b> are custom scripts that can be define. 
        <br>In this project under the scripts section there is a script called <i>"start-prod"</i>, so when <i>npm run start-prod</i> is run in the console, it runs <i>node app.js</i>.
        </p>

        <h2>Nodemon</h2>
        <p>nodemon is a tool that helps developing Node.js based applications by automatically restarting the node application when certain files are changed depening on what nodemon is supposed to look out for.
        nodemon does not change the way you have to code/develop node applications. 
        <br>When using nodemon we have to change the command for when running a node application: 
        <br><b>Command without using nodemon:</b> <i>node [JavaSript file name]</i></b>
        <br><b>Command line when using nodemon:</b> <i>nodemon [JavaSript file name]</i></p>
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