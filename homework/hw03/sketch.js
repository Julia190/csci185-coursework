function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
     drawCreature(92, 115, 85, 'lightGray', 'lightPink');
    drawCreature(487, 110, 101, 'red', 'blue');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

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