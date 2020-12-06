if (!window.sessionStorage.getItem('signed')){
    window.sessionStorage.setItem('page', window.location.href)
    window.location.href = './login.html'
}