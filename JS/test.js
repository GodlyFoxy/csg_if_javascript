var n = 1;

function preload() {
    pl = loadImage("../images/sprites/kever.png")
}


function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    for (var i = 0; i < 9; i++)
    {
        image(pl, i * 50, n * 45, 50, 50);
        if (i == 8  && n != 9)
        {
            i = -1;
            n += 1;
        }

    }
  text("breedte = " + pl.width, 150, 40);
}