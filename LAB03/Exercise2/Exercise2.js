var cur=0;
var size=5;
var id=["img/rug.jpg","img/rug2.jpg","img/rug3.jpg","img/rug4.jpg","img/rug5.jpg","img/rug6.jpg"]

function previous(){
if(cur==0)
{
  cur=size
}
else{
  cur--
}
let img=document.getElementById('id')
img.src=id[cur]
}

function next(){
  if(cur==size){
    cur=0
  }
  else{
    cur++
  }
  let img=document.getElementById('id')
  img.src=id[cur]
}
