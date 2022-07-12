function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let number=0;
document.querySelector("input").addEventListener('input',(val)=>number=val.target.value)

let arr=[]
let div=document.querySelector("#boxes");
document.querySelector("button[data-create]").addEventListener("click",()=>{
  if(number==0)return ;
  let i=0;
    while(i<number){
      let color=getRandomHexColor();
      arr.push(`<div style="background-color:${color};width:${30+i*10}px;height:${30+i*10}px;box-shadow:${3+i}px ${3+i}px ${3+i}px ${3+i}px gray"></div>`)
      i+=1;   
  }
  div.innerHTML=arr.map((val)=>val).join("");
  document.querySelector("input").value=""
  number=0

})
document.querySelector("button[data-destroy]").addEventListener("click",()=>{
  arr=[]
  div.innerHTML=arr
  document.querySelector("input").value=""
  number=0
})

