fetch('https://raw.githubusercontent.com/omkarvelankar/Dev-s-Blog/main/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}