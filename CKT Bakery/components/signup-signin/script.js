const loginSideBtn = document.querySelector('#login-side-btn');
const signupSideBtn = document.querySelector('#signup-side-btn');

loginSideBtn.addEventListener('click', (event) => {
    const loginSide = document.querySelector('#login-side');
    const signupSide = document.querySelector('#signup-side');
    if (loginSide.classList.contains('active'))
    {
        return;
    }
    else{
        loginSide.classList.add('active');
        signupSide.classList.remove('active');

    }
})

signupSideBtn.addEventListener('click', (event) => {
    const loginSide = document.querySelector('#login-side');
    const signupSide = document.querySelector('#signup-side');
    if (signupSide.classList.contains('active'))
    {
        return;
    }
    else{
        signupSide.classList.add('active');
        loginSide.classList.remove('active');

    }
})
