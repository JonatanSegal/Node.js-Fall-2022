
//can execute function due to hoisting
//console.log(add(5, 28));

//gets hoisted 
function add(a,b){
    return a + b;
}


//anonymoys fucntion after the equal sign.. dies not have name
const addAnonymousFunction = function(a,b){
    return a + b;
}

//uses curly brackets and need a return bu can expand byond 1 line and can console.log
const addArrowFunction = (a,b) => {
    return a + b;
}

//implicit return
const addArrowFunctionCompact = (a ,b) => a + b;

console.log(addAnonymousFunction(3,6));

function genericActionExecutor(anyCallBackFunction,name){
    // execute some code...
    return anyCallBackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;

console.log(genericActionExecutor(spitting,"Amanda"));

//task create a funciton that allows Malte to shoot and call it.
//task result should be: Malte is shooting.
const shooting = (person) => `${person} is shooting`;

console.log(genericActionExecutor(shooting,"Malte"));

//Create a SINGLE statement below that console log "Murat" is running away;
console.log(genericActionExecutor((name) => `${name} is running away`,"Murat"))
