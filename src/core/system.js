//Rect(x,y,w,h,color) - рисует прямоугольник
// render().draw(5,5,5,5,'green');

// canvas = document.getElementById(canvas);
// var rect = (x,y,w,h) =>{
//   render(canv).draw(x,y,w,h,'green');
// }
// this.render = function(Construct){
//   var red =  new Construct();
// };
// var VECTOR2 = (x,y) => {
//   this.x;
//   this.y;
//   return new VECTOR2(x,y);
// }


var enigne = function(canvas){
  var canv = document.getElementById(canvas);

  this.draw = {
    rect(x,y,w,h,color){
      render(canv).draw(x,y,w,h,color)
      return;
    }
  }

  return this
}
let VECTOR2 = function(x1,y1){
  return {x:x1,y:y1};
}
