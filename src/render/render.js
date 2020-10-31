// alert("render active");
var render = (canv) => {
  ctx  = canv.getContext("2d");
  this.draw = function(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
  }
  return this;
}
