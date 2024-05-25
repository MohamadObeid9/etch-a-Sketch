const container = document.querySelector("div");
container.style.cssText="display:flex;flex-wrap:wrap;border:1px solid black;max-width:354px;max-height:357px";
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const element =  document.createElement("div");
        element.style.cssText="padding:10px;background:blue;margin:1px;";
        container.appendChild(element);
    }
}

