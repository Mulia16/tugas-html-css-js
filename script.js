let btnLogin = document.getElementById("btnLogin")

let authentication = () => {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username == "mulia" && password == "mulia") {
        alert(`Selamat Datang ${username}`)
    } else {
        alert("Username atau password yang ada masukkan salah")
    }
}

btnLogin.addEventListener("click", authentication)