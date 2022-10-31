// My project
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
let y =canvasHeight-100;
let x = canvasWidth/2
let itlives = true
const balls = [
    { x: 500, y: 250, w:99, h:300, speed: 4 },
]
const c1 = {
    x: 100,
    y: 600,
    width: 25,
    speed: 15,
};
function setup() {
    createCanvas(canvasWidth, canvasHeight);
     drawCreature(x, y, 101, 'lightgray', 'lightpink');
}
counter=0;
function draw() {
    clear();
    if(c1.x > canvasWidth + 100){
        c1.x -= (canvasWidth + 200);
    }
    c1.x += c1.speed;
    drawCreature(c1.x, c1.y, c1.width, 'lightgray','lightpink');
    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
        let intersects = checkIntersection(350,475,525,bubble.x,bubble.y)
        if (intersects){
            itlives = false;
            console.log("fishkill")
        }
    }
    circle(balls[0].x, balls[0].y, balls[0].d);
    balls[0].y += 5 * Math.cos(counter / 30);
    balls[0].x += 3;
    if (balls[0].x > canvasWidth + 100) {
        balls[0].x = -100;
    }
    counter++;
    if (itlives == true){ drawLandscapeObject(500,300,50,130,'chocolate','white','black');}
    drawCreature(x, y, 75, 'lightgray', 'lightpink');
    drawCreature(1300, 600, 100, 'lightgray', 'lightpink');
    drawLandscapeObject(1300,100,33, 100,'chocolate','white','black');
    drawLandscapeObject(balls[0].x,balls[0].y,balls[0].w, balls[0].h,'chocolate','white','black');
}
const mousePos = ev =>{
    console.log('vertex(',mouseX,',',mouseY,');');
}
function drawLandscapeObject(x,y,w,h,c1,c2,c3) {
    fill(c1);
    triangle(x+(w*.3), y-(w*.7), x+(w*.8), y, x+(w*1.2), y-(w*.3)) //(530, 230, 580, 300, 620, 270)
    fill(c2);
    triangle(x-(w*.3), y-(w*.7), x-(w*.8), y, x-(w*1.2), y-(w*.3))
    ellipse(x, y, w, h); //(500, 300, 100, 260)
    fill(c3);
    circle(x-(w*.2), y-w, w*.2); //(480, 200, 20)
    circle(x+(w*.2), y-w, w*.2); //(520, 200, 20)
    fill(c1);
    ellipse(x+(w*.2), y-(w*.3), w*.4, w*.75); //(520, 270, 40, 75)
    ellipse(x-(w*.2), y+(w*.4), w*.3, w*.5); //(480, 340, 30, 50)
    triangle(x, y+(w*1.3), x-(w*.5), y+(w*2.2), x+(w*.5), y+(w*2.2)); //(500, 430, 450, 520, 550, 520)
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
let d = 50;
function shoot() {
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 20;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 20;
    } else if (ev.code == 'Space') {
        shoot();
    }
   displayMessage();
}
function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrow keys to move the Bunny, spacebar to shoot.", canvasWidth/2, canvasHeight/2);
}
function checkIntersection(fishY, leftX,rightX,bulletX, bulletY, d) {
    let verticalintersection = false;
    let horizontalintersection = false;
    if (bulletY < fishY) {
        verticalintersection = true;
    }
    if (bulletX > leftX && bulletX <rightX) {
        horizontalintersection = true;
    }
    console.log(horizontalintersection,verticalintersection)
    if (horizontalintersection && verticalintersection) {
        return true;
    }
    else {
        return false;
    }
}
document.addEventListener('keydown', moveController);