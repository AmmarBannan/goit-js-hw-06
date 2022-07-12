document.querySelector("input").addEventListener("blur",(word)=>{
    word.target.classList.add("invalid")
    if(word.target.value.length==word.target.getAttribute("data-length")){
        word.target.classList.replace("invalid","valid")
    }
})