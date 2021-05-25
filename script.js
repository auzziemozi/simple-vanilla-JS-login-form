const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const errMsg = document.querySelector('.err-msg')

form.addEventListener('submit', event => {
    event.preventDefault();
    //Store all error messages, which we will show if there is an error
    const messages = []

    //Check if input is empty
    if(username.value === '' || username.value === null) {
        messages.push('Username cannot be blank')
    } 
    if(password.value.length < 6) { 
        messages.push('Password should be at least 6 characters')
    }

    if(messages.length > 0) {
        errMsg.classList.remove('hidden') 
        errMsg.innerHTML = messages.join(', ')
    }
})