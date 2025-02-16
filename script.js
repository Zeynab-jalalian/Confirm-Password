const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const errorText=document.querySelector(".errorText");
const btn=document.querySelector("button");

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