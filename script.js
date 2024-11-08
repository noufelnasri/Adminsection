let showaside = document.getElementById("show-aside") ; 

let aside = document.getElementById("aside")  ;

let state =  false ; 

showaside.addEventListener("click" ,()=>{
    if(!state){
        aside.style.display = "block" ; 
        state = true ; 
        showaside.classList.remove("fa-bars") ; 
        showaside.classList.add("fa-x") ; 
    }else{
        aside.style.display = "none" ; 
        state = false ; 
        showaside.classList.remove("fa-x") ; 
        showaside.classList.add("fa-bars") ; 
    }
    
}); 

let showsupport = document.getElementById("open-nav-supported") ; 

let supported = document.getElementById("nav-supported") ; 

let statesupprted =  false ; 

showsupport.addEventListener("click" ,()=>{
    if(!statesupprted){
        supported.style.display = "flex" ; 
        statesupprted = true ; 
    }else{
        supported.style.display = "none" ; 
        statesupprted = false ; 
    }
    
}); 


let showinput= document.getElementById("show-input") ; 
let input = document.getElementById("input-search") ; 
let removeinput = document.getElementById("remove-search") ; 

showinput.addEventListener("click" ,()=>{
        input.style.display = "block" ;     
})


removeinput.addEventListener("click", ()=>{
    input.style.display = "none" ; 
})


let showmessages = document.getElementById("show-messages") ; 
let messages = document.getElementById("messages");  

let statemessges = false ; 


showmessages.addEventListener("click" ,()=>{
    if(!statemessges){
        messages.style.display = "block" ; 
        statemessges = true ; 
    }else{
        messages.style.display = "none" ; 
        statemessges = false ; 
    }
    
}); 


let show_user_menu = document.getElementById("show-user-menu") ; 

let user_menu = document.getElementById("user-menu") ; 

let remove_user_menu = document.getElementById("remove-user-menu") ; 
let stateuser = false ; 

show_user_menu.addEventListener("click" ,()=>{
    if(!stateuser){
        user_menu.style.display = "block" ; 
        stateuser = true ; 
    }else{
        user_menu.style.display = "none" ; 
        stateuser = false ; 
    }
    
}); 

remove_user_menu.addEventListener("click", ()=>{
    user_menu.style.display = "none" ; 
}) 


let show_action_list = document.querySelector("#show-action-list") ; 

let action_list = document.getElementById("action-list"); 

let stateaction =false ; 



show_action_list.addEventListener("click" ,()=>{
    if(!stateaction){
        action_list.style.display = "block" ; 
        stateaction = true ; 
    }else{
        action_list.style.display = "none" ; 
        stateaction = false ; 
    }
    
}); 


/////////////////Error pages location to user instead of 
//creating multiple pages ; 

let er403 = document.getElementById("403")  ;
let er404= document.getElementById("404") ;
let er405= document.getElementById("405") ;
let er500= document.getElementById("500") ;

let errortitle =document.getElementById("error-title") ; 

er404.addEventListener("click", () => {
    sessionStorage.setItem("errorCode", "404");
    window.location.href = "403.html";
});

er405.addEventListener("click", () => {
    sessionStorage.setItem("errorCode", "405");
    window.location.href = "403.html";
});

er500.addEventListener("click", () => {
    sessionStorage.setItem("errorCode", "500");
    window.location.href = "403.html";
});

er403.addEventListener("click", () => {
    sessionStorage.setItem("errorCode", "403");
    window.location.href = "403.html";
});

