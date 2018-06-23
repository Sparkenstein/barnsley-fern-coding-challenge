let x = 0;
let y = 0;

function setup() {
    createCanvas(700, 890);
    background(51);
    // frameRate(10);
}

function drawPoint() {
    // stroke(random(80), random(150,230), random(30));
    strokeWeight(1);
    let px = map(x, -2, 2, 0, width)
    let py = map(y, 0, 5.9, height, 0)
    point(px, py);
}

function nextPoint() {

    let p = random(100);

    var nextX;
    var nextY;

    if (p < 2) {
        stroke('chocolate');
        nextX = 0;
        nextY = 0.25 * y - 0.14;
    }
    else
        if (p < 86) {
            nextX = 0.85 * x + 0.02 * y;
            nextY = -0.02 * x + 0.83 * y + 1
        }
        else
            if (p < 93) { // Left sideleaves
                if(p < 90){
                    stroke('#00ff00')
                } 
                else {
                    stroke('#00ff99')
                }
                nextX = 0.09 * x - 0.28 * y;
                nextY = 0.3 * x + 0.11 * y + 0.6;
            }
            else // Right side leaves
            {
                if(p < 97){
                    stroke('#00ff00')
                } else {
                    stroke('#00ff99')
                }
                // stroke('#fff');
                nextX = -0.09 * x + 0.28 * y;
                nextY = 0.3 * x + 0.09 * y + 0.7;
            }

    x = nextX;
    y = nextY;

    point(nextX, nextY);
}

function draw(){
    for(let i=0; i<50; i++){
        drawPoint();
        nextPoint();
    }
}