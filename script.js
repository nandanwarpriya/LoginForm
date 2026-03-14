let signUpBtn  = document.querySelector('.signupBtn');
let signInBtn  = document.querySelector('.signinBtn');
let nameField  = document.querySelector('.namefield');
let title  = document.querySelector('.title');
let underline  = document.querySelector('.underline');
let text=document.querySelector('.text');

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

let togglePassword = document.querySelector('#togglePassword');

//SHOW / HIDE PASSWORD
togglePassword.addEventListener('click',()=>{

    // if(passwordInput.type === "password"){
    //     passwordInput.type="text";
    //     togglePassword.classList.remove("fa-eye");
    //     togglePassword.classList.add("fa-eye-slash");
    // }
    // else{
    //     passwordInput.type="password";
    //     togglePassword.classList.remove("fa-eye-slash");
    //     togglePassword.classList.add("fa-eye");
    // }
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type",type);
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

//CAPITALIZE NAME'S FIRST LETTER
nameInput.addEventListener("input",()=>{
    let words = nameInput.value.split(" ");

    for(let i=0; i<words.length; i++){
        if(words[i].length > 0){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    nameInput.value = words.join(" ");
});

//EMAIL IN SMALL LETTERS
emailInput.addEventListener("input",()=>{
    emailInput.value = emailInput.value.toLowerCase();
});

//SIGN IN BUTTON
signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML ='sign in';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
    text.innerHTML = 'lost password';
    
    let email = emailInput.value;
    let password = passwordInput.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
        user => user.email === email && user.password === password
    );

    if(validUser){
        alert("Login Successful");
    }else{
        alert("Invalid Email or Password");
    }
});

//SIGN UP BUTTON

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='sign up';
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
    underline.style.transform='translateX(0)';
    text.innerHTML = 'password suggestions';

    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    
    if(name === "" || email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    //EMAIL VALIDATION
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return;
    }

    //GET EXISTING USERS
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //CHECK IF USER ALREADY EXISTS
    let userExists = users.find(user => user.email === email);

    if(userExists){
        alert("Email already registered, Please Sign in.");
        signInBtn.click();
        return;
    }

    //CREATE USER
    let user = {
        name : name,
        email : email,
        password : password
    };

    //ADD USER TO ARRAY
    users.push(user);

    //SAVE BACK TO LOCALSTORAGE
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful");

    //CLEAR FIELDS
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
    //signInBtn.click();

    nameField.style.maxHeight='0';
    title.innerHTML ='sign in';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
    text.innerHTML = 'lost password';
    
});