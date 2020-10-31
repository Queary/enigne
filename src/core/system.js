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
  var arr_block = [];
  var canv = document.getElementById(canvas);

    this.add_block = function(name,x,y,w,h,color){
      arr_block.push({name:name,x:x,y:y,w:w,h:h,c:color});
      console.log(arr_block);
      return;
    }

    this.render = function (time) {
        let c = arr_block.length;
      var i=0
      setInterval(function() {
        if(c!=i){render(canv).draw(arr_block[i].x,arr_block[i].y,arr_block[i].w,arr_block[i].h,arr_block[i].c);i+=1}
        if(i==c){i=0;}
      },time)
      i = 0;
    }
    this.render_all = function (time) {
      let i=0
      setInterval(function() {
        let c = arr_block.length;
        if(c!=i){render(canv).draw(arr_block[i].x,arr_block[i].y,arr_block[i].w,arr_block[i].h,arr_block[i].c);i+=1}
        if(i==c){i=0;}
      },time)
      i = 0;
    }
    this.move = function(name,x,y) {
      // render(canv).clear()
      let c = arr_block.length-1;
      let i = 0;
      let w = 0;
      while(arr_block[i].name!=name && w == 0 && i<c){i+=1;console.log(name+":")}
      if(i>c){w=1;}
      if(i<c){arr_block[i].x=x;arr_block.y=y;}

      console.log(i)
    }
  return this
}
let VECTOR2 = function(x1,y1){
  return {x:x1,y:y1};
}
