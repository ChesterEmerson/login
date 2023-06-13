const form =
document.querySelector('form');
const usernameInput=document.querySelector('#username');
const passwordInput=document.querySelector('#password');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const username=usernameInput.value;
    const password=passwordInput.value;

    if(username==='example'&&password==='password'){
        alert('login Successful!');
    } else {
        alert('incorrect username or password. Please Try again.');
    }
});