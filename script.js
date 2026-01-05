let signUpBtn  = document.querySelector('.signupBtn');
let signInBtn  = document.querySelector('.signinBtn');
let nameField  = document.querySelector('.namefield');
let title  = document.querySelector('.title');
let underline  = document.querySelector('.underline');
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML ='sign in';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
    text.innerHTML = 'lost password';
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHtml='sign up';
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
    underline.style.transform='translateX(0)';
    text.innerHTML = 'password suggestions';
});