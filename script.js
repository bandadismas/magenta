let items = document.querySelector(".items");
let hamburger = document.getElementById("hamburger");
let menuOpen = false;

hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        items.style.maxHeight = "300px";
        menuOpen = !menuOpen // true
    } else {
        items.style.maxHeight = "0";
        menuOpen = !menuOpen // false 
    }

    items.addEventListener("click", () => {
        items.style.maxHeight = "0";
        menuOpen = false;
    }, false);
},false);
