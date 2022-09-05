'use strict'; //keeps things inside scope

// Never do this!!!
//totalGlobalVariable = "Fumi"; // Goes outside of scope
//var globalVariable = "Fumi"; 

//New scope
/*
{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}
someValue is true since let is not global and the nested scope gets destroyed after running
*/

/*
{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}
//someValue is false because var is global and goes out side of scope
*/

//variable decleration
//Don't use var in for loops since var is global use let instead
//setTimeout async sleep fuction




