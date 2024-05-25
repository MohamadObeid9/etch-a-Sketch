const container = document.querySelector("div");
container.style.cssText="display:flex;border:1px solid black;gap:5px";
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const element =  document.createElement("div");
        element.style.cssText="padding:10px;background:blue;margin:5px;";
        container.appendChild(element);
    }
}

