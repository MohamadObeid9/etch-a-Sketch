const container = document.querySelector("div");
const button = document.createElement("button");
button.textContent ="choose a number";
document.body.insertBefore(button,container);
container.style.cssText="display:flex;gap:1px;flex-wrap:wrap;border:1px solid black;max-width:337px;max-height:337px";

//creation of the grid of divs and how to color them
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const element =  document.createElement("div");
        element.style.cssText="padding:10px;background:blue;";
        container.appendChild(element);

        //how to color a div when we hover over it
        document.body.addEventListener('mouseover', e => {
            let div = e.target.closest('div');//select the nearset div
            if (div===container) { return; }//if the nearest div is the container div skip
            div.style.backgroundColor = 'red';// else make the bgc of this div red
          });

          //how to color a div when we move the mouse out of it
          document.body.addEventListener('mouseout', e => {
            let div = e.target.closest('div');//select the nearset div
            if (div===container) { return; }//if the nearest div is the container div skip
            div.style.backgroundColor = 'red';// when we move the mouseOut the div , the bgc of this div rest red
          });
    }
}

//the user can choose the number he want
button.addEventListener("click",()=>{
    let numchosen = null;
    do {
        numchosen = prompt("enter a number between 1 and 100 :");
    } while (numchosen < 1 || numchosen >100);
    container.textContent="";
    container.style.cssText=`display:flex;justify-content:center;align-items:center;gap:1px;flex-wrap:wrap;border:1px solid black;max-width:(${numchosen}*21+1)px;max-height:(${numchosen}*21+1)px`;
    for (let i = 0; i < numchosen; i++) {
        for (let j = 0; j < numchosen; j++) {

            const element =  document.createElement("div");
            element.style.cssText="padding:10px;background:blue;";
            container.appendChild(element);

            document.body.addEventListener('mouseover', e => {
                let div = e.target.closest('div');
                if (div===container) { return; }
                div.style.backgroundColor = 'red';
              });

              document.body.addEventListener('mouseout', e => {
                let div = e.target.closest('div');
                if (div===container) { return; }
                div.style.backgroundColor = 'red';
              });
        }
    }
});
