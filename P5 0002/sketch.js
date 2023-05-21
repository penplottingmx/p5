let border = 100;
let page_width = 1054;
let page_length = 1625;
let size = 25;

function setup() {
  createCanvas(page_width, page_length, SVG);
  strokeWeight(1);
  noFill();
  background(255);
}

function draw() {
  
  for(let i=0; i < page_length-(border*2) ; i+=size*2){
    for(let j=0; j < page_width-(border*2) ; j+=size*2){
  
      radius = random(2) * 10;
      for(let k=0; k < random(3); k++){
        radiusMultiplier = k * 15;
        ellipse(
          border+j, 
          border+i, 
          radius+radiusMultiplier, 
          radius+radiusMultiplier
        );
        
      }
    }
  }
  
  //save("mySVG.svg");
  //print("saved svg");
  noLoop();

}



