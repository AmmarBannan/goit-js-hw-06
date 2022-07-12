const range=document.querySelector("#font-size-control")

range.addEventListener("input",(val)=>document.querySelector("#text").style.fontSize=`${val.target.value}px`)