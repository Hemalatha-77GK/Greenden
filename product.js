var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closeicon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
var productlist=document.getElementById("productlist")
var searchlist=document.getElementById("searchlist")
var search=searchlist.querySelectorAll("div")

productlist.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<search.length;count=count+1)
    {
        if(search[count].textContent.toUpperCase().indexOf(enteredvalue)<0)
        {
            search[count].style.display="none"
        }
        else{
            search[count].style.display="block"
        }
    }
})