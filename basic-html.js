fetch('basic-html.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_basic-html");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})