
document.querySelector("#name-input").addEventListener("input",(name)=>{
    if(document.querySelector("#name-input").value===' ')name.target.innerHTML="Anonymous"
    else{document.querySelector("#name-output").innerHTML=name.target.value;console.log(name.target.value.length,name.target.value)}
})
