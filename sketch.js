var diwaliDiya, diwaliAnimation;

function preload()
{
    diwaliAnimation = loadAnimation("Diwali0.png", "Diwali1.png", "Diwali2.png", "Diwali3.png", "Diwali4.png", "Diwali5.png");
}


function setup()
{
    createCanvas(540, 520);

    //Creating sprite for diwali diya
    diwaliDiya = createSprite(250, 250);
    diwaliDiya.addAnimation("firing", diwaliAnimation);
    diwaliDiya.scale = 0.7;

}


function draw()
{
    background("purple");
  
    drawSprites();

    //Adding text for hD
    stroke("black");
    textSize(25);
    fill("white");
    text("HAPPY DIWALI!!", 160, 490);

    //Adding text for AM
    stroke("black");
    textSize(15);
    fill("turquoise");
    text("BY-ABHINAV MISHRA", 250, 510);

}