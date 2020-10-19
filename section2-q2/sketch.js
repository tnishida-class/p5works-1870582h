// チェッカー
function setup(){
 createCanvas(200,200)
  noStroke();
 for(let i=0; i<8; i++){
for(let j=0; j<8; j++){
    if((i+j)%2!=0){fill(130);}
    else{fill(255);}
    rect(i*25,j*25,25,25);
  //ここまでが格子模様
  //ここから円
    if((i+j)%2!=0 && j<3){fill(255,0,0);}
    else if((i+j)%2!=0 && j>4){fill(0);}
    else if((i+j)%2!=0 && j>=3 &&j<=4){fill(130);}
    else{fill(255);}
    ellipse((i+0.5)*25,(j+0.5)*25,22);
  }
 }

  }
