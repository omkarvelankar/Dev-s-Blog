fetch('https://omkarvelankar.github.io/Dev-s-Blog/navigation/index.html')
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
