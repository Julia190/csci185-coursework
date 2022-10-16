function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
let counter = 0;
while (counter < 800) {
    //circle(100, 200+ counter*10, 50);
    //circle(200, 200+ counter*10, 50);
    //counter +=1
    
    if (counter % 2 == 0 ){
        fill('hotpink');
    }
    else if(counter % 3 == 0) {
        fill('white');
    }
    else{
        fill('lightblue')
    }
    circle(600, 0 + counter * 10, counter * 10);
    counter +=1;
}

    drawGrid(canvasWidth, canvasHeight);
}
