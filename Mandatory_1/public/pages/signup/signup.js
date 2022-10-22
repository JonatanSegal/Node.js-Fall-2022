document.getElementById("new-user-btn").addEventListener("click",addUser)

function addUser(){
    const newUser = {}
    newUser.name = document.getElementById("name").value
    newUser.email = document.getElementById("email").value
    newUser.password = document.getElementById("password").value

    fetch("http://localhost:8080/sign-up",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }

    })
}