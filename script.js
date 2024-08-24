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
buttonContainer.appendChild(button_new_game);

const button_clear = document.createElement("button");
button_clear.textContent = "clear";
buttonContainer.appendChild(button_clear);

const button_black = document.createElement("button");
button_black.textContent = "black";
buttonContainer.appendChild(button_black);

const button_colorfull = document.createElement("button");
button_colorfull.textContent = "colorfull";
buttonContainer.appendChild(button_colorfull);

//create the container
const container = document.createElement("div");
container.style.cssText =
  "display:grid;gap:2px;grid-template-rows:repeat(16,1fr);grid-template-columns:repeat(16,1fr);width:500px;height:500px;";
document.body.appendChild(container);

//create the initial grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const element = document.createElement("div");
    element.style.cssText = "padding:10px;background:blue";
    container.appendChild(element);

    //when the mouse hover , the background color become red
    document.body.addEventListener("mouseover", (e) => {
      let div = e.target.closest("div");
      if (div === container || div === buttonContainer) {
        return;
      }
      div.style.backgroundColor = "red";
    });

    //when the mouse move out , the background color rest red
    document.body.addEventListener("mouseout", (e) => {
      let div = e.target.closest("div");
      if (div === container || div === buttonContainer) {
        return;
      }
      div.style.backgroundColor = "red";
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

//CLEAR BUTTON

/* when the clear button clicked , we reset the whole grid elements background color to blue
and when we hover over the divs there background color become red */
button_clear.addEventListener("click", () => {
  container.textContent = "";
  container.style.cssText =
    "display:grid;gap:2px;grid-template-rows:repeat(16,1fr);grid-template-columns:repeat(16,1fr);width:500px;height:500px;";

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const element = document.createElement("div");
      element.style.cssText = "padding:10px;background:blue";
      container.appendChild(element);
    }
  }
  document.body.addEventListener("mouseover", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = "red";
  });

  document.body.addEventListener("mouseout", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = "red";
  });
});

//BLACK BUTTON

//when the black button is clicked , the background color of the divs become black
button_black.addEventListener("click", () => {
  document.body.addEventListener("mouseover", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = "black";
  });

  document.body.addEventListener("mouseout", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = "black";
  });
});

//COLORFULL BUTTON

/*when the colorfull button is cliked , when the mouse hover over a div ,
 it's background color become a random color */
button_colorfull.addEventListener("click", () => {
  document.body.addEventListener("mouseover", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = randomColor();
  });

  document.body.addEventListener("mouseout", (e) => {
    let div = e.target.closest("div");
    if (div === container || div === buttonContainer) {
      return;
    }
    div.style.backgroundColor = randomColor();
  });
});

//NEW GAME BUTTON

button_new_game.addEventListener("click", () => {
  const userChoice = Number(prompt("choose a number between 1 and 100"));
  //if userChoice is out of range , we break out of the function
  if (userChoice < 1 || userChoice > 100) {
    alert("pls choose a number between 1 and 100");
    return false;
  }
  //else we reset grid to the initial form
  container.textContent = "";
  container.style.cssText = `display:grid;gap:2px;grid-template-rows:repeat(${userChoice},1fr);grid-template-columns:repeat(${userChoice},1fr);width:500px;height:500px;`;

  for (let i = 0; i < userChoice; i++) {
    for (let j = 0; j < userChoice; j++) {
      const element = document.createElement("div");
      element.style.cssText = `padding:1/${userChoice}%;background:blue`;
      container.appendChild(element);
    }
  }
});

//generate a random rgb color

const randomColor = () => {
  const x = Math.random() * 256;
  const y = Math.random() * 256;
  const z = Math.random() * 256;
  return "rgb(" + x + "," + y + "," + z + ")";
};
