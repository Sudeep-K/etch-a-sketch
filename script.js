// draws all the div elements loopwise inside container
function draw() {
    let container = document.querySelector(".container");
    console.log(container);
    let verticalDivs;
    let newDivs;

    for (i=0; i<16; i++) {
        verticalDivs = document.createElement("div");
        verticalDivs.classList.add("vertical");
        for (j=0; j<16; j++) {
            newDivs = document.createElement("div");
            verticalDivs.appendChild(newDivs);
        }
        container.appendChild(verticalDivs);
    }
}

draw();

// sketch mode enables the user to color the white divs to black
function sketch() {
    let groupdivSelected = document.querySelectorAll(".vertical>div");
    console.log(groupdivSelected);
    groupdivSelected.forEach(div=> div.addEventListener("mouseover", function() {
        div.style.cssText = "background-color: black;";
    }));
}

// erase mode enables the user to erase the sketch by turning color to white
function erase() {
    let groupdivSelected = document.querySelectorAll(".vertical>div");
    groupdivSelected.forEach(div=>div.addEventListener("mouseover", function(){
        div.style.cssText = "background-color: #b6b6b6;";
    }));
}

// reset mode resets all the blocks back to white in color
function reset() {
    let groupdivSelected = document.querySelectorAll(".vertical>div");
    groupdivSelected.forEach(div=>div.style.cssText="background-color: #b6b6b6;");
}

// according to the tool selected fires up the appropriate event handler
let sketchBtn = document.querySelector(".sketch");
sketchBtn.addEventListener("click", sketch);
let eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", erase);
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);
