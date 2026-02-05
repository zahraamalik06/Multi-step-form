//StepOne 
let stepOne = document.getElementById('step1');
let submitStepOne = document.getElementById('submit--1');
//USER NAME VARIABLES
let userName = document.getElementById('username');
let userNameError = document.getElementById('username-error');
//EMAIL VARIABLES
let email = document.getElementById('email');
let emailError = document.getElementById('email-error');
// PASSWORD VARIABLES
let age = document.getElementById('age');
let ageError = document.getElementById('age-error');

//Step Two
let stepTwo = document.getElementById('step2');
let submitStepTwo = document.getElementById('submit--2');

let password = document.getElementById('password');
let passwordError = document.getElementById('password-error');

let confirmPass = document.getElementById('confirmPassword');
let confirmPasswordError = document.getElementById('confirmPassword-error');

let selectCountry = document.getElementById('country');
let countryError = document.getElementById('country-error');

// Step Three
let stepThree = document.getElementById('step3');
let submitStepThree = document.getElementById('submit--3');

let selectSkillLevel = document.getElementById('skill');
let skillError = document.getElementById('skill-error');

//telephone number pattern
//const telPattern = /^[+\d]?(?:[\d\s()-]{7,15})$/;

//progress
let progress1 = document.getElementById('progress1');
let progress2 = document.getElementById('progress2');
let progress3 = document.getElementById('progress3');


function userNameValidation(){
    let nameValue = userName.value.trim();
    if(nameValue.length < 4){
        userName.classList.remove('valid');
        userName.classList.add('error');
        userNameError.classList.add('show');
        return false;
    }
    else{
        userName.classList.remove('error');
        userName.classList.add('valid');
        userNameError.classList.remove('show');
        return true;
    }
}
userName.addEventListener('input', userNameValidation);

function emailValidation(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = email.value.trim();

    if(!emailPattern.test(emailValue)){
        email.classList.remove('valid');
        email.classList.add('error');
        emailError.classList.add('show');
        return false;
    }
    else{
        email.classList.remove('error');
        email.classList.add('valid');
        emailError.classList.remove('show');
        return true;
    }
}
email.addEventListener('input', emailValidation);

function ageValidation(){
    let ageValue = age.value.trim();

    if(ageValue < 18){
        age.classList.remove('valid');
        age.classList.add('error');
        ageError.classList.add('show');
        return false;
    }
    else{
        age.classList.remove('error');
        age.classList.add('valid');
        ageError.classList.remove('show');
        return true;
    }
}
age.addEventListener('input', ageValidation);

submitStepOne.addEventListener('click', function(e){
    e.preventDefault();
    let nameVal = userNameValidation();
    let emailVal= emailValidation();
    let ageVal = ageValidation();
    if(nameVal && emailVal && ageVal){
        stepOne.classList.add('hidden');
        stepTwo.classList.remove('hidden');
        progress1.classList.remove('active');
        progress2.classList.add('active');
    }
});

function passwordValidation(){
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    let passwordValue = password.value.trim();

    if(!passwordPattern.test(passwordValue)){
        password.classList.remove('valid');
        password.classList.add('error');
        passwordError.classList.add('show');
        return false;
    }
    else{
        password.classList.remove('error');
        password.classList.add('valid');
        passwordError.classList.remove('show');
        return true;
    }
}
password.addEventListener('input', passwordValidation);

function confirmPassValidation(){
    let passwordVal = password.value;
    let confirmPassValue = confirmPass.value.trim();

    if(confirmPassValue != passwordVal){
        confirmPass.classList.remove('valid');
        confirmPass.classList.add('error');
        confirmPasswordError.classList.add('show');
        return false;
    }
    else{
        confirmPass.classList.remove('error');
        confirmPass.classList.add('valid');
        confirmPasswordError.classList.remove('show');
        return true;
    }
}
confirmPass.addEventListener('input', confirmPassValidation);

function selectCountryValidation(){
    if(selectCountry.value === ""){
        selectCountry.classList.remove('valid');
        selectCountry.classList.add('error');
        countryError.classList.add('show');
        return false;
    }
    else{
        selectCountry.classList.remove('error');
        selectCountry.classList.add('valid');
        countryError.classList.remove('show');
        return true;
    }
}
selectCountry.addEventListener('change', selectCountryValidation);

submitStepTwo.addEventListener('click', function(e){
    e.preventDefault();

    let passVal = passwordValidation();
    let confirmPassVal = confirmPassValidation();
    let selectCountryVal = selectCountryValidation();

    if(passVal && confirmPassVal && selectCountryVal){
        stepTwo.classList.add('hidden');
        stepThree.classList.remove('hidden');
        progress2.classList.remove('active');
        progress3.classList.add('active');
        showInformation();
    }
});

function selectSkillValidation(){
    let previewSkill = document.getElementById('preview-skill');
    switch (selectSkillLevel.value){
        case '':
            break;
        
        case 'beginner':
            previewSkill.innerHTML = 'Beginner';
            break;
        
        case 'intermediate':
            previewSkill.innerHTML = 'Intermediate';
            break;
        
        case 'advanced':
            previewSkill.innerHTML = 'Advanced';
            break;
        
        case 'expert':
            previewSkill.innerHTML = 'Expert';
            break;
        
        default:
            break;

    }

    if(selectSkillLevel.value === ""){
        selectSkillLevel.classList.remove('valid');
        selectSkillLevel.classList.add('error');
        skillError.classList.add('show');
        return false;   
    }
    else{
        selectSkillLevel.classList.remove('error');
        selectSkillLevel.classList.add('valid');
        skillError.classList.remove('show');
        return true;
    }

}
selectSkillLevel.addEventListener('change', selectSkillValidation);

function showInformation(){
    let previewUserName = document.getElementById('preview-username');
    let previewEmail = document.getElementById('preview-email');
    let previewAge = document.getElementById('preview-age');
    let previewCountry = document.getElementById('preview-country');

    previewUserName.innerHTML = userName.value;
    previewEmail.innerHTML = email.value;
    previewAge.innerHTML = age.value;
    previewCountry.innerHTML = selectCountry.value;
}

submitStepThree.addEventListener('click', function(e){
    e.preventDefault();
   
    if(selectSkillLevel.value !== ''){
    alert('YOU HAVE SUBMITTED YOUR REGISTRATION SUCCESSFULY!');
    }
    else{
        alert('Select your skill before submitting this form!');
    }
});



