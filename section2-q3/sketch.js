// ダーツ
function setup(){
  createCanvas(200,200);
  stroke(255);
 fill(0);
 ellipse(100,100,200);
//ここまでで黒円

  for(let i=0;i<20;i++){
  if(i%2==0){
  fill(0,255,0);}
  else{fill(255,0,0);}
  arc(100,100,150,150,PI*i*0.1,PI*(i+1)*0.1);
//ここまでで①赤緑

  if(i%2==0){fill(242,215,141);}
  else{fill(0);}
 arc(100,100,140,140,PI*i*0.1,PI*(i+1)*0.1);
//ここまでで➀黄黒

  if(i%2==0){
  fill(0,255,0);}
  else{fill(255,0,0);}
  arc(100,100,100,100,PI*i*0.1,PI*(i+1)*0.1)
//ここまでで②赤緑

  if(i%2==0){fill(242,215,141);}
  else{fill(0);}
 arc(100,100,90,90,PI*i*0.1,PI*(i+1)*0.1);
//ここまでで②黄黒

　fill(0,255,0);
  ellipse(100,100,30);
  fill(255,0,0);
  ellipse(100,100,15);
  }
}
