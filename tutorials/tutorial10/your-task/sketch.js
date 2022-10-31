const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const f1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 5,
};
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}
function drawCreature(x, y, size, primaryColor, secondaryColor ) {
    fill(primaryColor);
    ellipse(x-(size*.33),y-(size*.66), size*.33, size);
    
    fill(secondaryColor);
    ellipse(x-(size*.33), y-(size*.66), size*.233, size*.66);

    fill(primaryColor);
    ellipse(x+(size*.33),y-(size*.66), size*.33, size);

    fill(secondaryColor);
    ellipse(x+(size*.33), y-(size*.66), size*.233, size*.66);

    fill(primaryColor);
    circle(x, y, size);

    fill(secondaryColor);
    ellipse(x, y+(size*.22), size*.233, size*.066);

    fill('black');
    circle(x+(size*.2), y, size*.1);

    fill('black');
    circle(x-(size*.2), y, size*.1);
}

const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

   drawCreature(x, y, 50, 'lightgray', 'lightpink')

    displayMessage();
}

function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}

function draw() {
    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
    }

    drawCreature(x, y, 50, 'lightgray', 'lightpink')

    // message:
    displayMessage();

}


function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 5;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 5;
    } else if (ev.code == 'Space') {
        shoot();
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrow keys to move the Bunny, spacebar to shoot.", canvasWidth/2, canvasHeight/2);
}



// Add event listener on keydown
document.addEventListener('keydown', moveController);
