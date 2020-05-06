

btn = document.getElementById("btnContact")
btn.addEventListener("mouseenter", function(){
    document.querySelector("#btnContact span").innerHTML = "Let's work together !"
    document.querySelector("#btnContact span").classList.add("effet")
})

btn.addEventListener("mouseleave", function(){
    document.querySelector("#btnContact span").innerHTML = "Contact me"
    document.querySelector("#btnContact span").classList.remove("effet")
})