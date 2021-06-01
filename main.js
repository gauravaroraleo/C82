c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
MouseEvent="";
lastpofx="";
lastpofy="";
color="black";
width=5;
c1.addEventListener("mousedown",mymousedown);
function mymousedown(e){
color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    MouseEvent="mousedown";
}
c1.addEventListener("mouseup",mymouseup);
function mymouseup(e){
 MouseEvent="mouseup";      
}
c1.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
 MouseEvent="mouseleave";
    c1.addEventListener("mousemove",mymousemove);}
function mymousemove(e){
currentpofx=e.clientX-c1.offsetLeft;
    currentpofy=e.clientY-c1.offsetTop;
    if( MouseEvent=="mousedown")
        {
         ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width;
            ctx.moveTo(lastpofx,lastpofy);
            ctx.lineTo(currentpofx,currentpofy);
            ctx.stroke();   
        }
    lastpofx=currentpofx;
    lastpofy=currentpofy;
   
}
function erase(){
 ctx.clearRect(0,0,c1.width,c1.height);
    
    
    
    
}


