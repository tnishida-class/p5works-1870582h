function setup(){
  noFill();
  for(let i=1;i<10;i++){
   if(i<5){stroke(0,0,255);}
   else{stroke(255,0,0);}
    let x=i*10
  ellipse(50,50,x);
}
}
