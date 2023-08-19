fetch('first-website-using-VScode.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_first-website-using-VScode");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})