document.getElementById("login-btn").addEventListener("click",login)

function login(){
    const loginInfo = {}
    loginInfo.email = document.getElementById("email").value
    loginInfo.password = document.getElementById("password").value

    fetch("http://localhost:8080/login",{
        method:"POST",
        body:JSON.stringify(loginInfo),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    })
}
