function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let number=0;
document.querySelector("input").addEventListener('input',(val)=>number=val.target.value)

let arr=[]
let div=document.querySelector("#boxes");
document.querySelector("button[data-create]").addEventListener("click",()=>{
  if(number>arr.length){
    let i=arr.length;
    while(i<number){
      arr.push(`<div style="background-color:${getRandomHexColor()};width:${30+i*10}px;height:${30+i*10}px"></div>`)
      i+=1;
      
    }
  }
  else{arr=arr.slice(0,number)}
  div.innerHTML=arr.map((val)=>val).join("");
  console.log(arr)
})
document.querySelector("button[data-destroy]").addEventListener("click",()=>{
  console.log("destroy")
  arr=[]
  div.innerHTML=arr
})

