/*
javascript dom Pop Up Modal from the point of click
*/

(function(){
    let arroww = document.querySelector(".arroww");
    let arrowg = document.querySelector(".arrowg");
    let white = document.querySelector(".white");
    let gray = document.querySelector(".gray");

    arroww.addEventListener("click", () => {
       if (window.innerWidth < 720) {
        white.classList.toggle("hide");
        gray.classList.toggle("hide");
       } else {
        gray.classList.toggle("hide");
        gray.classList.toggle("popup");
       }
    })

    arrowg.addEventListener("click", () => {
        if (window.innerWidth < 720) {
        gray.classList.toggle("hide");
        white.classList.toggle("hide");
        } else {
        gray.classList.toggle("hide");
        gray.classList.toggle("popup");
        }
    })
})();