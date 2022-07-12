const category=document.querySelector("#categories")
console.log("Number of categories: ",category.childElementCount)



for(const el of category.children){
    let title =el.firstElementChild.textContent
    console.log("Category: "+title)
    console.log("Elements: "+el.querySelector("ul").childElementCount)
    
    
}

