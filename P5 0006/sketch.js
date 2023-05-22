let border = 100;
let page_width = 1054;
let page_length = 1625;
let size = 7;

function setup() {
  createCanvas(page_width, page_length, SVG);
  strokeWeight(1);
  fill(0)
}

function draw() {
  
  background(255);
  
  horizontalSteps = (page_width - (2*border)) / 50;
  verticalSteps = (page_length - (2*border)) / 50;
  
  for(let i=0; i < page_length-(border*2) ; i+=size*2){
    
    radius = horizontalSteps / (horizontalSteps * (size/i) );
    
    for(let j=0; j < page_width-(border*2) ; j+=size*2){
      
      radius = random(0,3) * 4;
      
      ellipse(border+j, border+i, radius, radius);
        
    }
  }
  
  save("mySVG.svg");
  print("saved svg");
  noLoop();

}



