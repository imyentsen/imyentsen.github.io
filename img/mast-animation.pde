  int xBlock = 15;
  int yBlock = 15;
  int randomPosX ;
  int randomPosY ;
  int randomShow ;
  int randomTri;
  
  int numBlocks; 
  float BlockW;
  float BlockH;
  
  PShape depoLogo;

 
  
void setup(){
  frameRate(12);
  BlockW = displayWidth/xBlock;
  BlockH = displayHeight/(2*yBlock);
  numBlocks = int(random(20, 100));
  size(1300, 450);
  background(#00e09b);
  depoLogo = loadShape("logo_img_w.svg");
}

void draw(){
  
// Draw green grid as bg   
  
  for (int i = 0; i < xBlock; i++){
    for (int j = 0; j < yBlock; j++){
    stroke(255,10);
    fill(0, 224, 155, 10.625);
    rect(i*BlockW, j*BlockH, BlockW, BlockH);
    }
  }
  
// Draw LOGO  
  depoLogo.disableStyle(); 
  fill(7, 122, 72, 20);
  noStroke();
  shape(depoLogo,BlockW-20 ,-1*BlockH , 480, 480);
  
  
// create array for location  
  randomPosX = (int)random(0, xBlock);
  randomPosY = (int)random(0, yBlock);

  // draw white green cells  
  fill(255, 255, 255, 120);
  stroke(255, 10);
  rect(randomPosX*BlockW, randomPosY*BlockH, BlockW, BlockH); 
  
  // draw dark green cells    
  randomPosX = (int)random(0, xBlock);
  randomPosY = (int)random(0, yBlock);
  fill(1, 40, 25);
  rect(randomPosX*BlockW, randomPosY*BlockH, BlockW, BlockH); 
  
  // draw red triangles
  randomShow = (int)random(0, 10);
  randomPosX = (int)random(0, xBlock);
  randomPosY = (int)random(0, yBlock);
  if (randomShow == 0){
  stroke(255);
  fill(100, 0);
  rect(randomPosX*BlockW, randomPosY*BlockH, (randomPosX+0.5)*BlockW, (randomPosY+0.5)*BlockH);
  fill(249, 189, 189);
  triangle(randomPosX*BlockW, randomPosY*BlockH, (randomPosX+0.5)*BlockW, randomPosY*BlockH, randomPosX*BlockW, (randomPosY+0.5)*BlockH);
  }
  else if (randomShow == 1){
    fill(0, 224, 155);
    noStroke();  
    rect(randomPosX*BlockW, randomPosY*BlockH, 3*BlockW, 3*BlockH); 
  }
  else {}
}
