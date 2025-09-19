const brick_display = document.querySelector("#brick-display");
const brick_btn_1 = document.querySelector("#brick-btn1");
const brick_btn_2 = document.querySelector("#brick-btn2");
const brick_btn_3 = document.querySelector("#brick-btn3");
const invert_btn = document.querySelector("#invert-btn");
const revert_btn = document.querySelector("#revert-btn");
const pyramid_display = document.querySelector("#pyramid-display");

const count = 8;
let brick = "#";
let rows = [];
let inverted = false;

function update_pyramid_display() {
    rows = [];
    pyramid_display.innerText = "";
    pyramid_generator();
    return true;
}

function update_Brick_Display(brickText) {
    brick_display.innerText = brickText;
    brick = brickText;
    update_pyramid_display();
}

//BRICK STYLE BUTTONS
const brickButtons = [brick_btn_1, brick_btn_2, brick_btn_3];

for (const brickButton of brickButtons) {
    brickButton.onclick = function () {
        update_Brick_Display(brickButton.innerText);
    }
}


// INVERT, REVERT BUTTONS
const inver_revert_Buttons = [invert_btn, revert_btn];

for (const i_r_btn of inver_revert_Buttons) {
    if (i_r_btn.innerText === "Invert") {
        i_r_btn.onclick = function () {
            inverted = true;
            update_pyramid_display();
        }
    } else if (i_r_btn.innerText === "Revert") {
        i_r_btn.onclick = function () {
            inverted = false;
            update_pyramid_display();
        }  
    } 
}

// ROWS GENERATOR (NORMAL & INVERTED)
function createRows() {
    if (!inverted) {
        for (let i=1; i <= count; i++) {
            rows.push(brick.repeat(2 * i - 1));
        }
    } else {
        for (let i=1; i <= count; i++) {
            // rows.unshift(" ".repeat(count - i) + brick.repeat(2 * i - 1)) + " ".repeat(count - i);
            rows.unshift(brick.repeat(2 * i - 1));
        }
    }
}

// PYRAMID GENERATOR 
function pyramid_generator() {
    createRows()
    for (const row of rows) {
        pyramid_display.innerText += row + "\n"
    }
}
