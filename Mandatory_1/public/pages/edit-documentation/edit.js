const selectOptions = document.getElementById("page-select")

fetch("http://localhost:8080/api/documentation")
    .then(response => response.json())
    .then(result => {
        console.log(result)
        result.forEach(page => {
            selectOptions.innerHTML += '<option value="'+page.id+'">'+page.titleName+'</option>' 
        })
    })