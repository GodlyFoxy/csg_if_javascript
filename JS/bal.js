var bal = {
    x: 225,
    y: 225,
    diameter: 100,
    stap: 5,
    sprite: null,
    rotation: 0,
    flipped: false,
    

    beweeg() {
        this.x = constrain(this.x, this.diameter/2, width - this.diameter/2);
        this.y = constrain(this.y, this.diameter/2, height - this.diameter/2);

        if(keyIsDown(37)) {
            this.x -= this.stap
            this.rotatation = 0;

            if (!this.flipped) {

            this.diameter = -this.diameter;
            this.flipped = true;

            }
        }
        if(keyIsDown(38)) {
            this.y -= this.stap
            this.rotatation = 270;

        }
        if(keyIsDown(39)) {
            this.x += this.stap
            this.rotatation = 0;

            if (this.flipped) {

            this.diameter = -this.diameter;
            this.flipped = false;
            
            }

        }
        if(keyIsDown(40)) {
            this.y += this.stap
            this.rotatation = 90;
            this.diameter = -this.diameter;

        }
        /*
        if(keyIsDown(38)) this.y -= this.stap;
        if(keyIsDown(39)) this.x += this.stap;
        if(keyIsDown(40)) this.y += this.stap;*/
    },

    teken() {
        /*fill("pink");
        stroke("purple");
        ellipse(this.x,this.y,this.diameter);*/
        push();
        angleMode(DEGREES);
        rotate(this.rotation++);
        imageMode(CENTER);
        image(this.sprite,this.x,this.y,this.diameter,this.diameter);
        pop();
    }

}

function preload()
{
    pacMan = loadImage("../Uploads/Pacman.svg");
}


function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
  frameRate(30);
  //noLoop();
}

function draw() {
    bal.sprite = pacMan;
    background("silver");
    bal.beweeg();
    bal.teken();
}