const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const errorText=document.querySelector(".error-text");
const btn=document.querySelector("button");
const show=document.querySelector(".show");

function active(){
    if(pass1.value.length >= 6){
        btn.removeAttribute("disabled","");
        btn.classList.add("active");
        pass2.removeAttribute("disabled","")
    }else{
        btn.setAttribute("disabled","");
        btn.classList.remove("active");
        pass2.setAttribute("disabled","")
    }
}

btn.onclick=function(){
    if(pass1.value != pass2.value){
        errorText.style.display="block";
        errorText.classList.remove("matched");
        errorText.textContent="Error! Confirm Password Not Match";
        return false;
    }else{
        errorText.style.display="block";
        errorText.classList.add("matched");
        errorText.textContent="Nice! Confirm Password Matched";
        return false;
    }
}

function active2(){
    if(pass2.length != ""){
     show.style.display="block";
     show.onclick=function(){
        if((pass1.type=="password") && (pass2.type=="password")){
            pass1.type="text";
            pass2.type="text";
            this.textContent="Hide";
             this.classList.add("active");
        }else{
            pass1.type="password";
            pass2.type="password";
            this.textContent="Show";
             this.classList.remove("active");
        }
     }
    }else{
     show.style.display="none";
    }
}