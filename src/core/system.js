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

//f unigne
var enigne = function(canvas){
  //array render block
  var arr_block = [];
  //canv = connect id canvas
  var canv = document.getElementById(canvas);
  //pust array
  this.block = function(name,x,y,w,h,color) {
    arr_block.push({name:name,x:x,y:y,w:w,h:h,c:color});
  }
  //render > render no method all
  this.render = ()=>{
    let count = arr_block.length;
    var i = 0;
    while(i<count){
      render(canv).draw(arr_block[i].x,arr_block[i].y,arr_block[i].w,arr_block[i].h,arr_block[i].c);
      i+=1;}
  }
  //system clear
  this.clear = function () {
    render(canv).clear();
  }
  //v = (выборка) game.v.x('block_name') log(x = 155)
  this.v= {
    x(name){
      let count = arr_block.length;
      let i = 0;
      let res = true;
      while(name!=arr_block[i].name && i+1<count){

        i++;
        if(i+1<count){res=false}
      }
      if(res==true){
        return arr_block[i].x;
      }
    },y(name){
      let count = arr_block.length;
      let i = 0;
      let res = true;
      while(name!=arr_block[i].name && i+1<count){

        i++;
        if(i+1<count){res=false}
      }
      if(res==true){
        return arr_block[i].y;
      }
    }
  }
  //передвижение блока со встроенном очистки (WARNING) он не обновляет сцену
  this.move = function (name,x,y) {
    render(canv).clear();
    let count = arr_block.length;
    let i = 0;
    let res = true;
    while(name!=arr_block[i].name && i+1<count){

      i++;
      if(i+1<count){res=false}
    }
    if(res==true){
      arr_block[i].x = x;
      arr_block[i].y = y;
    }
  }
  return this
}
//одиночные вне функции

//вектор
let VECTOR2 = function(x1,y1){
  return {x:x1,y:y1};
}
