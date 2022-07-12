let counterValue=0

const decrement=document.querySelector("button[data-action='decrement']");
const increment=document.querySelector("button[data-action='increment']");

document.querySelector("#counter"). addEventListener("click",(button)=>{
    if (button.target.nodeName !== "BUTTON") {
        return;
    }
    button.target.getAttribute("data-action")==="decrement"?
    counterValue-=1:counterValue+=1
    document.querySelector("#value").textContent=counterValue
})