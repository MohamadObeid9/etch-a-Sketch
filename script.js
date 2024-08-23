//create the title
const title = document.createElement("h1");
title.textContent = "etch a sketch";
document.body.appendChild(title);

//create the button container
const buttonContainer = document.createElement("div");
document.body.appendChild(buttonContainer);

//create the buttons
const button_new_game = document.createElement("button");
button_new_game.textContent = "new game!";
button_new_game.setAttribute("class", "button");
buttonContainer.appendChild(button_new_game);

const button_clear = document.createElement("button");
button_clear.textContent = "clear";
button_clear.setAttribute("class", "button");
buttonContainer.appendChild(button_clear);

const button_black = document.createElement("button");
button_black.textContent = "black";
button_black.setAttribute("class", "button");
buttonContainer.appendChild(button_black);

const button_colorfull = document.createElement("button");
button_colorfull.textContent = "colorfull";
button_colorfull.setAttribute("class", "button");
buttonContainer.appendChild(button_colorfull);

//create the container
const container = document.createElement("div");
container.style.cssText =
  "display:grid;gap:2px;grid-template-rows:repeat(16,30px);grid-template-columns:repeat(16,30px);";
container.setAttribute("id", "container");
document.body.appendChild(container);

//create the initial grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const element = document.createElement("div");
    element.style.cssText = "padding:10px;background:blue";
    container.appendChild(element);
    document.body.addEventListener('mouseover', e => {
      let div = e.target.closest('div');
      if (div===container || div===buttonContainer) { return; }
      div.style.backgroundColor = 'red';
    });

    document.body.addEventListener('mouseout', e => {
      let div = e.target.closest('div');
      if (div===container || div===buttonContainer) { return; }
      div.style.backgroundColor = 'red';
    });
  }
}

//create the footer
const footer = document.createElement("h2");
document.body.appendChild(footer);
const footerLink = document.createElement("a");
footerLink.setAttribute("href", "https://github.com/MohamadObeid9");
footerLink.textContent = "made by mohamad";
footer.appendChild(footerLink);
