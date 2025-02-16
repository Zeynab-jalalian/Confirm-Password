const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const errorText=document.querySelector(".errorText");
const btn=document.querySelector("button");
const show=document.querySelector(".show");

function active(){
    if(pass1.value.length>=6){
        btn.removeAttribute("disabled","");
        pass2.removeAttribute("disabled","");
        btn.classList.add("active");
    }else{
        btn.setAttribute("disabled","");
        pass2.setAttribute("disabled","");
        btn.classList.remove("active");
    }
}

btn.onclick=function(){
    if(pass1.value != pass2.value){
        errorText.style.display="block";
        errorText.classList.remove("nice");
        errorText.textContent="Error! Confirm Password Not Match";
        return false;
    }else{
        errorText.style.display="block";
        errorText.classList.add("nice");
        errorText.textContent="Nice! Confirm Password Matched";
        return false;
    }
}

function active2(){
    if(pass2.value.length!=""){
      show.style.display="block";
      show.onclick=function(){
        if((pass1.type=="password") && (pass2.type=="password")){
            pass1.type="text";
            pass2.type="text";
            this.textContent="Hide";
            show.classList.add("active");
        }else{
            pass1.type="password";
            pass2.type="password";
            this.textContent="Show";
            show.classList.remove("active");
        }
      }
    }else{
        show.style.display="none";
    }
}