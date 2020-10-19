//ギリシャ国旗
function setup(){
  createCanvas(270,180);
  for(let i=0;i<5;i++){
  strokeWeight(20);
  stroke(44,89,171);
  let x=i*40
  line(0,x+10,270,x+10);
//ここまでで横線

 fill(44,89,171);
 rect(0,0,90,90);
 stroke(255);
 strokeCap(PROJECT);
 line(0,50,90,50);
 line(50,0,50,90);
//ここまでで十字架
  }
}
