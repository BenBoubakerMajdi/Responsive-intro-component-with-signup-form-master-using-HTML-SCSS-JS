
//!input field errors

const input = document.querySelectorAll('.contact__input');
const error_msg = document.querySelectorAll('.error_msg');
const error_icon = document.querySelectorAll('.error_icon');
const btn = document.querySelector('.contact__button');


//! View and hide password 
const view = document.querySelector('.open_eye');
const hide = document.querySelector('.close_eye');
let pwd = input[3];



btn.addEventListener('click', (event) =>{
    event.preventDefault();
    
    for(let i=0; i<4; i++){
        if (i == 2) {
            if (!validateEmail(input[i])) {
                input[i].style.marginBottom = "0.5rem";
                input[i].style.border = "1px solid hsl(0, 100%, 74%)";
                input[i].value = "email@example.com";
                input[i].style.color = "hsl(0, 100%, 74%)";
                error_msg[i].style.display = "block";
                error_icon[i].style.display = "block";
                continue;
            }
        }

        if ((i == 3) && (pwd.value == "")) {
            view.style.display = "none";
            hide.style.display = "none";
        }

        if(input[i].value == "") {
            input[i].placeholder = "";
            input[i].style.border = "1px solid hsl(0, 100%, 74%)";
            input[i].style.marginBottom = "0.5rem";
            error_msg[i].style.display = "block";
            error_icon[i].style.display = "block";
        }
    }     
});

input.forEach((inp, ind) => {
        inp.addEventListener('click', () => {

            if(error_icon[ind].style.display == "block") {
                error_icon[ind].style.display = "none";
                error_icon[ind].style.display = "none";
            }
        });
});




function validateEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}




view.addEventListener('click', () =>{
    pwd.type = "text";
    view.style.display = "none";
    hide.style.display = "block";
});

hide.addEventListener('click', () =>{
    pwd.type = "password";
    hide.style.display = "none";
    view.style.display = "block";
});


// !change the color of the placeholder of the email input