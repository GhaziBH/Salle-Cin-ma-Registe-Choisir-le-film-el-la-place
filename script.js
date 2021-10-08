const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('button') ;

function showError(input,message){
    const formControl = input.parentElement ;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText= message;
}
//show success outline
function showSuccess(input){
    const formControl = input.parentElement ;
    formControl.className='form-control success';

}
// chek email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,'email not valid');
    }
    return re.test(String(email).toLowerCase());

}
//check required function
function checkRequired(inputArr){
inputArr.forEach(function(input) {
    if (input.value.trim()=== ''){
        showError(input ,`${getFieldName(input)} is required`);
    }
        else {
            showSuccess(input);
        }
    //console.log(input.value);
});

}

// checkpasswords match
function checkPasswordsMatch(input1 , input2){
    if(input1.value !== input2.value ){
       showError(input2,'Passwords do not  match') ;
    }
}
//check input length
function checklength(input,min,max){
    if(input.value.length<min ){
        showError(input,`${getFieldName(input)} must be at least ${min} characters `);
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less then ${max} characters `);
    }
}
//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checklength(username,3,15);
    checklength(email,5,20);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

   /* if(username.value===''){
        showError(username,'username is required');
    } else {
        showSuccess(username);
    }
    
 if(email.value===''){
        showError(email,'email is required');
    }
    else if(!isValidEmail (email.value)){
        showError(email,'Email is not valid');
    } else {
        showSuccess(email);
    }
    

 if(password.value===''){
        showError(password,'password is required');
    } else {
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'password2 is required');
    } else {
        showSuccess(password2);
    }*/
   
    

  
    
});



