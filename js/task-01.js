const category=document.querySelector("#categories")
console.log("Number of categories: ",category.childElementCount)

for(const el of category.getElementsByTagName("ul")){
    console.log("Category: ", el.firstElementChild.textContent)
    console.log("Elements:", el.childElementCount)
}