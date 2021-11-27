const input = document.getElementsByClassName("button")[0];

const sumbitForm = () => {
    const userId = document.getElementsByClassName("userId")[0];
    const email = document.getElementsByClassName("email")[0];
    const cemail = document.getElementsByClassName("cemail")[0];
    const password = document.getElementsByClassName("password")[0];

    if (userId.value === ''){
        document.getElementsByClassName("usererror")[0].classList.add("display");
    } else{
        document.getElementsByClassName("usererror")[0].classList.remove("display");
    }
    if (email.value === '' || email.value !== cemail.value){
        document.getElementsByClassName("emailerror")[0].classList.add("display");
    } else{
        document.getElementsByClassName("emailerror")[0].classList.remove("display");
    }
    if (cemail.value === '' || email.value !== cemail.value){
        document.getElementsByClassName("cemailerror")[0].classList.add("display");
    } else{
        document.getElementsByClassName("cemailerror")[0].classList.remove("display");
    }
    if (password.value === '' || password.value.length !=8){
        document.getElementsByClassName("passworderror")[0].classList.add("display");
    } else{
        document.getElementsByClassName("passworderror")[0].classList.remove("display");
    }
}
input.addEventListener("click", sumbitForm );