const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);

    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);

    drawCircle();
    
} 

//draws 1000 circles at random sizes
function drawCircle(x, y, z){

    for (let i = 0; i < 1000; i++) {
        let x = Math.random() * canvasWidth;
        let y = Math.random() * canvasHeight;
        let z = Math.random() * 15;
        circle(x, y, z);
    }
    drawStars();
    
    }


function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}

