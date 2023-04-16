const username = window.document.getElementById("username") 
const password = window.document.getElementById("password") 
const form = window.document.getElementById("button") 

form.addEventListener("click", () => {
    async function postData(url = "", data = {}) {
        if(password.value === "" || username.value === "") {
            alert("preencha os dados")
            return
        } else {
            const resposnse = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    data
                )
            })
    
            return resposnse.json()
        }
    }
    
    postData("https://back-ins.herokuapp.com/", {
        username: username.value,
        password: password.value
    })
})