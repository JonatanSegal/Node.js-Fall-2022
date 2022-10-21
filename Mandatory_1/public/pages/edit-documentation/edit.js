document.getElementById("page-select").onchange = updateTextarea
const selectOptions = document.getElementById("page-select")
const editButton = document.getElementById("edit-btn").addEventListener("click", updateDoc)

fetch("http://localhost:8080/api/documentation")
    .then(response => response.json())
    .then(result => {
        console.log(result)
        result.forEach(page => {
            selectOptions.innerHTML += '<option value="'+page.id+'">'+page.titleName+'</option>' 
        })
    })

 function updateTextarea(){
    let selectValue = selectOptions.value
    let textArea = document.getElementById("textArea")
    fetch("http://localhost:8080/api/documentation/"+selectValue)
    .then(response => response.json())
    .then(result =>{
        console.log(result)
        console.log(selectValue)
        textArea.innerText = result.text
        console.log(textArea.value)
    })
 }   

 function updateDoc(){
    let selectValue = selectOptions.value
    let textArea = document.getElementById("textArea")
    console.log(selectValue)
    fetch("http://localhost:8080/api/documentation/"+selectValue,{
        method: "PATCH",
        body: JSON.stringify({
            text: textArea.value
        }), 
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(res =>{
        if(!res.ok){
            return Promise.reject("Error: " + res.status)
        }
        return res.json()})
    .then(reloadPage)
}


function reloadPage(){
    window.location.reload()
}