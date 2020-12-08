if (window.sessionStorage.getItem('signed') != "true"){
    window.sessionStorage.setItem('page', window.location.href)
    window.location.href = './login.html'
}