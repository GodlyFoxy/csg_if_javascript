var bal = {
    x: 225,
    y: 225,
    diameter: 100,
    stap: 10,
    sprite: null,
    

    beweeg() {
        this.x = constrain(this.x, this.diameter/2, width - this.diameter/2);
        this.y = constrain(this.y, this.diameter/2, height - this.diameter/2);

        if(keyIsDown(37)) {
            this.x -= this.stap;

        }
        if(keyIsDown(38)) {
            this.y -= this.stap;

        }
        if(keyIsDown(39)) {
            this.x += this.stap;


        }
        if(keyIsDown(40)) {
            this.y += this.stap;

        }
        /*
        if(keyIsDown(38)) this.y -= this.stap;
        if(keyIsDown(39)) this.x += this.stap;
        if(keyIsDown(40)) this.y += this.stap;*/
    },

    teken() {
        fill("pink");
        stroke("purple");
        ellipse(this.x,this.y,this.diameter);
        /*
        imageMode(CENTER);
        image(this.sprite,this.x,this.y,this.diameter,this.diameter);
        */
    }

}

var eiland = {
    x: null,
    y: 0,
    diameter: 300,
    colour: "darkgreen",

    teken() {
        fill(this.colour);
        stroke("black")
        ellipse(this.x, this.y, this.diameter);
    },
    wordtBezocht(obj){
        fill('black');
        //text(dist(obj.x,obj.y,this.x,this.y) - this.diameter/2 - obj.diameter/2, 50,50); //laat afstand tussen rand van eiland en object zien, er van uitgaan dat object cirkel is

        if( dist(obj.x,obj.y,this.x,this.y) - this.diameter/2 - obj.diameter/2 <= 0)
        [
            this.colour = '#C2B280'
        ]

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
  frameRate(60);
  eiland.x = canvas.width;
  //noLoop();
}

function draw() {
    bal.sprite = pacMan;
    background("lightblue");
    bal.beweeg();
    eiland.wordtBezocht(bal);
    eiland.teken();
    bal.teken();
}