const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const errorText=document.querySelector(".error-text");
const btn=document.querySelector("button");

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