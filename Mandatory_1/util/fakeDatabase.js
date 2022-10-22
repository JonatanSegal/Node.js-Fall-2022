import fs from "fs"
const EDITDATABASEPATH = "util/editDatabase.json"

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
        <p>
        JavaScript is a dynamic computer programming language. 
        <br>In dynamically typed languages, type checks is performed during runtime, meaning that you can assign multiple things to the same variable.
        <br>
        <figure class="figure">
        <figcaption class="figure-caption">Example of JavaScrip being dynamic:</figcaption>
        <img class="figure-img img-fluid rounded" src="../components/images/DynamicType.png">
        </figure>
        </p>
        
        <h2>Node.js</h2>
        <p>Node.js is an open-source, JavaScript runtime environment, that uses chromes V8 JavaScript engine to make it possible to run network applications using JavaScript.
        <br>To run a Node application you run the following command: <br><i>node [JavaSript file name]</i><br>Usually the script is called app.js</p>
        
        <h4>Package.json</h4>
        <p>Package.json is a fundamental part of Node.js ecosystem, package.json is used to store metadata about the project as well as a list of dependencies and scripts.
        <br>
        <figure class="figure">
        <figcaption class="figure-caption">Example of how a package.json can look:</figcaption>
        <img class="figure-img img-fluid rounded" src="../components/images/jsonpackage.png">
        </figure>

        <br><b>Meta data:</b> is data about the application, e.g. "name" or "type".
        <br>By having <i>"type":"model"</i> in package.json, makes it so files ending with <i>.js</i> will be loaded in as ES modules by Node. This means that we now have to use the import syntax instead of require.

        <br><b>Dependencies:</b> can be a code library or a package that is needed for the node application to work. When typing <i>npm install</i> in the terminal, package.json is scanned and the relevant files are installed/downloaded.
        <br>In the picture above we see a <i>key:value</i> pair under dependencies, this indicates that the application uses <i><a href="express" class="link-primary">express</a></i> since that is the key, the value is the number that indicates what version of express the application uses.
        
        <br><b>Scripts:</b> are custom scripts that can be define. 
        <br>In this project under the scripts section there is a script called <i>"start-prod"</i>, so when <i>npm run start-prod</i> is run in the console, it runs <i>node app.js</i>.
        </p>

        <h2>Nodemon</h2>
        <p>Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when certain files are changed depending on what nodemon is supposed to look out for.
        <br>Nodemon does not change the way you have to code/develop node applications. 
        <br>In order to use nodemon we have to change the command for when running a node application: 
        <br><b>Command without using nodemon:</b> <i>node [JavaSript file name]</i></b>
        <br><b>Command line when using nodemon:</b> <i>nodemon [JavaSript file name]</i></p>
        `
    },
    {
        id: 1,
        titleName:"Express-page",
        text:`
        <h2>Express framework</h2>
        <p>Express is a web framework that helps building web applications and APIs using Node.js </p>
        <h6>REST API</h6>
        <p>When making APIs there are certain convictions and best practices one should keep in mind. 
        Some of those practices is how to name endpoints and the order of ones HTTP request methods shoulde be in the backend.
        When naming endpoints it should be kept to nouns and avoid unnecessary things such as verbs, the reasoning is to make understandable for everyone and easy to read.
        <br>Example if you want to get at list of users from you server the endpoint should be <i>https://example.com/users</i> and not <i>https://example.com/getUsers</i>
        this is because of the CRUD functionality that HTTP request already have, so it should be implicit what an endpoint does depending on the HTTP request it invokes.
        <br><b>Oder of HTTP request methods:</b>
        <br><ul>
        <li>GET (all)</li>
        <li>GET (Single)</li>
        <li>POST</li>
        <li>PUT</li>
        <li>PATCH</li>
        <li>DELETE</li>
        </ul>
        </p>
        <h2>Expess routing/routers</h2>
        <p>Routing is about how an application's endpoint reponse to a request from the client. 
        In Express a route is done by calling a method that correspond to one of the HTTP methods, 
        so for a GET requests it would be <i>app.get()</i> and for POST requests <i>app.post</i>
        <br><figure class="figure">
        <figcaption class="figure-caption">Simple route:</figcaption>
        <img class="figure-img img-fluid rounded" src="../components/images/SimpleRoute.png">
        </figure>
        <br>
        <h6>Callback function</h6>
        <p>A callback or callback function is any reference to executable code that is passed as an argument</p>
        </p>
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

export function getDoc(){
    return JSON.parse(fs.readFileSync(EDITDATABASEPATH))
}

export function saveDoc(docText){
    fs.writeFileSync(EDITDATABASEPATH,JSON.stringify(docText))
}

export function getUser(email) {
    const foundUser = users.find(user => user.email === email)   
    if(!foundUser) {
        alert("User not found");
    } else {
        alert("You logged in");
        return foundUser 
    }  
}