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
  let arr_block = [];
  let _gravity = 0;
  let _speed   = 0;
  window['_arr_block'] = arr_block
  //array render blockw
  //canv = connect id canvas
  let canv = document.getElementById(canvas);
  //pust array
  this.block = function(name,type,x,y,w,h,color) {
    let count = arr_block.length;
    console.log(count+":system_count");
    arr_block.push({name:name,type:type,x:x,y:y,w:w,h:h,c:color});
    if(count>0){collision(arr_block,0,count,_gravity,_speed).collision_obj()}//обр коллизий
  }
  //render > render no method all
  this.render = ()=>{
    let count = arr_block.length-1;
    let i = 0;
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
      let count = arr_block.length
      let i = 0;
      let res = true;
      while(i<count){
        if(arr_block[i].name == name){return arr_block[i].x;}
        i++;
      }i=0
    },y(name){
      let count = arr_block.length;
      let i = 0;
      let res = true;
      while(i<count){
        if(arr_block[i].name == name){return arr_block[i].y;}
        i++;
      }i=0
    }
  }
  //описание устарело
  //передвижение блока со встроенном очистки (WARNING) он не обновляет сцену
  let move_and_render = 0;//1=будет в коцне рендерить 0 = не будет рендерить в конце
  this.move = function (name,x,y) {
    console.log(arr_block[0]);
    //render(canv).clear();
    let count = arr_block.length;
    console.log(count+":count");
    let i = 0;
    let res = true;
    while(name!=arr_block[i].name && i+1<count){
      i++;
      console.log(i+":i")
      if(name==arr_block[i].name){
        arr_block[i].x = x;
        arr_block[i].y = y;
      }
      if(i+1<count){res=false}
    }
    if(res==true){
      console.log('ds')
      arr_block[i].x = x;
      arr_block[i].y = y;
      console.log(arr_block[i].x+":"+arr_block[i].y);
      let count1 = arr_block.length;
      var i1 = 0;
      while(i1<count1 && move_and_render == 1){
        render(canv).draw(arr_block[i1].x,arr_block[i1].y,arr_block[i1].w,arr_block[i1].h,arr_block[i1].c);
        i1+=1;}
    }
  }
  this.sysphys = (gravity,speed)=>{
    setInterval(function() {
        //render(document.getElementById('canvas')).clear()
        let i = 0;
        let count = arr_block.length
        // console.log(arr_block[0].y)
        arr_block[1].y+=gravity
        render(canv).clear();
        let counti = arr_block.length;
        let ii = 0;
        while(ii<counti){
          render(canv).draw(arr_block[ii].x,arr_block[ii].y,arr_block[ii].w,arr_block[ii].h,arr_block[ii].c);
          ii+=1;}
    },speed)
  }
  this.phys =(gravity,speed)=>{
    _gravity = gravity
    _speed   = speed
    setInterval(()=>{
      render(canv).clear();
      physics().gravity(arr_block,gravity);
      let counti = arr_block.length;
      let ii = 0;
      while(ii<counti){
        render(canv).draw(arr_block[ii].x,arr_block[ii].y,arr_block[ii].w,arr_block[ii].h,arr_block[ii].c);
        ii+=1;}
      //console.log(arr_block[0].y)
    },speed)
  }
  // collision
  // (arr,gravity,speed)
  // collision_obj
  // закрытый метод
  // this.collision = (speed)=>{
  //   setInterval(()=>{
  //     collision(arr_block,_gravity,speed).collision_obj()
  //   },speed)
  // }

  
  return this
}
//одиночные вне функции

//вектор
let VECTOR2 = function(x1,y1){
  return {x:x1,y:y1};
}
