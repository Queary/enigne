//сделать системное прикосание(вне gamejs) //пока не системное
//сделать событие event при прикосание с другим обьектом
//прошлая версия (arr,gravity,speed)
global_mouse_activator=0;
global_mouse_x=0;
global_mouse_y=0;
var collision = (arr,idplayer,idblock,gravity,speed)=>{
  speed*=0;
  let player = idplayer;
  let i = idblock;
  this.collision_obj = ()=>{
    setInterval(function(){
      //alert("ds")
      //console.log(123);
      let count = arr.lenght
      //console.log(arr[0]+":arrcollision");
      //console.log(arr[1].y);
      //примерный алгоритм
      //149-24 - y                = arr[player].y > arr[i].y-arr[player].y-4
      //arr[1].x > 149-20  начало = arr[player].x > arr[i].x-arr[player].w-5
      //arr[1].x < 190+10 конец   = arr[player].x < arr[i].x-((arr[player].w /2) - 5)
      //console.log(arr[1].y > arr[i].y - arr[1].y - 4);
      //x.block('gr2','block',150,150,50,50,'black');
      //document.getElementById('viem').innerHTML =arr[0].y;
      //console.log(arr[i]);
      if(arr[i].type == "block"
      && arr[player].y > arr[i].y-arr[player].w
      && arr[player].y < arr[i].y+arr[i].h
      && arr[player].x > arr[i].x-arr[player].w
      && arr[player].x < arr[i].x+arr[player].w*2){arr[0].y-=gravity}
      //console.log(speed+":speed collision");
    },speed)
  }
  this.collision_mouse = (fun)=>{
    setInterval(function(){
      x = global_mouse_x;
      y = global_mouse_y
      //console.log(global_mouse_activator);
      //console.log(x+":mosx");
      if(global_mouse_activator == 1
        && arr[i].type=="button"
        && x > arr[i].x//левый
        && y < arr[i].y+arr[i].h//нижний y
        && x < arr[i].x+arr[i].w//правый
        && y > arr[i].y//вехний y
      ){global_mouse_activator=0;fun();}
    },speed)
  }
  return this
}




//методы уже под движком
// стандартная коллизия
//collision(arr).collision_obj()
// прикосание player -> obj
//collision(arr).event('id_block',f_obr(),speed)
// прикосание obj1 -> obj2
//collision(arr).evetTo('id_block1',id_block2,f_obr(),speed)
