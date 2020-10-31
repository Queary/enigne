// alert("render active");
var render = (canv) => {
  ctx  = canv.getContext("2d");
  this.draw = function(x,y,w,h,color){
    // ctx.fillStyle = 'white';
    // ctx.fillRect(0,0,5000,5000);
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
  }
  this.clear=function() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,5000,5000);
  }
  return this;
}
