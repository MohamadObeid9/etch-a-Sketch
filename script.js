const container = document.querySelector("div");
const button = document.createElement("button");
button.textContent ="choose a number";
document.body.insertBefore(button,container);
container.style.cssText="display:flex;flex-wrap:wrap;border:1px solid black;max-width:354px;max-height:357px";
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const element =  document.createElement("div");
        element.style.cssText="padding:10px;background:blue;margin:1px;";
        container.appendChild(element);
        document.body.addEventListener('mouseover', e => {
            let div = e.target.closest('div');
            if (!div) { return; }
            div.style.backgroundColor = 'red';
          });

          document.body.addEventListener('mouseout', e => {
            let div = e.target.closest('div');
            if (!div) { return; }
            div.style.backgroundColor = 'red';
          });
    }
}
button.addEventListener("click",()=>{
    let numchosen = null;
    do {
        numchosen = prompt("enter a number between 1 and 100 :");
    } while (numchosen < 1 || numchosen >100);
    container.textContent="";
    container.style.cssText=`display:flex;flex-wrap:wrap;border:1px solid black;max-width:${numchosen}*${22}px;max-height:${numchosen}*${22}px`;
    for (let i = 0; i < numchosen; i++) {
        for (let j = 0; j < numchosen; j++) {
            
            const element =  document.createElement("div");
            element.style.cssText="padding:10px;background:blue;margin:1px;";
            container.appendChild(element);

            document.body.addEventListener('mouseover', e => {
                let div = e.target.closest('div');
                if (!div) { return; }
                div.style.backgroundColor = 'red';
              });
    
              document.body.addEventListener('mouseout', e => {
                let div = e.target.closest('div');
                if (!div) { return; }
                div.style.backgroundColor = 'red';
              });
        }
    }
});
