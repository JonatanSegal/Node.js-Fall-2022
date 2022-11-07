/* 
Why: Javascript is single-threaded
If we didn't write asynchronous code we would have blocking code.

Use case of asynchronous code:
- Data traveling over network (fetch)
- Reading and writing files.
- import when asynchronously calling URLs.
- Interaction with database.
- Heavy calculations.
- Encruption/Decryption.
- Event listeners (DOM).

Basically anything that takes time (since we don't want to block and prevent other code from running.)

Solution 1:
Callback functions.
Problem: Callback hell, Pyramid of doom

Solution 2:
Introducting promises!
Can have two diffrent states:
- Pending 
- Fulfilled
    - Resolved, Rejected

Solution 3:
Introducion async/await.
Again syntatic sugar.

*/
 new Promise((resolve, reject) =>{
    try{
        throw  Error
        resolve("Yay")
    }catch(stackTrace){
        reject("Nay")
    }
 })
 .then(successMessage => console.log(successMessage))
 .catch(errorMessage => console.log(errorMessage))


function howAwsomeAmI(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                resolve(name + " is very cool 8^)")
            }catch(errorMessage){
                reject(name + " is not very cool :^(")
            }
        },3000)
    })
}


howAwsomeAmI("Anders")
.then(anwser => console.log(anwser))
.catch(notCool => console.log(notCool))

function somthingGoodSomthingBad(){
   return new Promise((resolve,reject) => {
        setTimeout(()=>{
        try{
            resolve("good")
        }catch(bad){
            reject("bad")
        }
    },3000)
    })
}
/*
somthingGoodSomthingBad()
.then(shouldBeGood => console.log(shouldBeGood))
.catch(shouldBeBad => console.log(shouldBeBad))
*/
//IIFE imedielty invoke function epxression
(async function asyncAwaitExample() {
    try{
    const shouldBeGood = await somthingGoodSomthingBad()
    const awsomeMessage = await howAwsomeAmI("Fumi")
    console.log(shouldBeGood)
    console.log(awsomeMessage)
    }catch(errorMessage){
        console.log(errorMessage)
    }
})()

//asyncAwaitExample()