//js random
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//connect
var canv = document.getElementById("canvas")
var ctx  = canv.getContext("2d")

//code dawn
function dawn(){
ctx.fillStyle   = 'purple'
ctx.fillRect(50,50,50,50)
ctx.strokeStyle = 'red'
ctx.lineWidth = 10
ctx.strokeRect(110,110,50,50)
ctx.arc(250,250,100,0,Math.PI * 2,false)
ctx.fill()

var grad = ctx.createLinearGradient(0,0,500,0)
grad.addColorStop('0','magenta')
grad.addColorStop('.50','blue')
grad.addColorStop('1','red')
ctx.fillStyle=grad
ctx.font = '20px Georgia'
ctx.fillText("hello World",50,50)
}
// ctx.scale(1,1) - transform
// ctx.rotate(3 * Math.PI/100) - поворот

ctx.fillStyle = 'black'
ctx.fillRect(100,300,300,100);
ctx.fillStyle = '#321321'
ctx.fillRect(150,150,50,50)

var y = 150
var x = 150
var gravity = 0.2
var nav = 0
var h   =  0
var restart = 0
//функиця отрисовки всех элементов
function block(){
    ctx.fillRect(100,300,300,100)
    ctx.fillRect(500,100,300,100)
    ctx.fillRect(1000,400,300,100)
    ctx.fillStyle = 'black'
    ctx.fillRect(50,50,100,50)
    ctx.fillStyle   = 'purple'
    ctx.font = '15px Georgia'
    ctx.fillText("hello World",60,80)
}
function rew(){
	ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canv.width,canv.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(100,300,300,100)
    ctx.fillRect(500,100,300,100)
    ctx.fillRect(1000,400,300,100)
    block()
}

//II player control
setInterval(function(){
	if(5==1){
    nav=random(1,5)
	h = random(1,10)
	restart+=1
   if(nav == 1){y-=h}
    if(nav == 2){x+=h;}
    if(nav == 3){x-=h;}
    if(nav == 4){y+=h}
    document.getElementById("viemnav").innerHTML = 'nav:' + nav
    }
	//for(i=0;i<55;i++){
	//	x+=0.1
	//	rew()
	//	ctx.fillStyle = '#321321'
	//	ctx.fillRect(x,y,50,50)
    //}
	//отображение нужных отслеживаемых событий
	document.getElementById("viemx").innerHTML = 'x:' + x
	document.getElementById("viemy").innerHTML = 'y:' + Math.floor(y)

//гравитация
	//первый блок

  if(y<250 || x>400){
    y+=gravity
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canv.width,canv.height)
    ctx.fillStyle = '#321321'
    ctx.fillRect(x,y,50,50)
    ctx.fillStyle = 'black'
    block()
  }
  	//второй блок
  if((x>451 && x<801 ) && y>50 && y<100){
    y-=gravity
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canv.width,canv.height)
    ctx.fillStyle = '#321321'
    ctx.fillRect(x,y,50,50)
    ctx.fillStyle = 'black'
    block()
  }
     //третий блок
  if((x>990 && x<1300) && y>350 && y<400){
    y-=gravity
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canv.width,canv.height)
    ctx.fillStyle = '#321321'
    ctx.fillRect(x,y,50,50)
    ctx.fillStyle = 'black'
    block()
  }
},5)

//обработчик событий клавиатуры + рисование
document.addEventListener('keydown', function(event) {
  //консоль выводит всё о нажатой клавиши
  //console.log(event)
  if (event.key == 'd') {
	x+=7
	rew()
	ctx.fillStyle = '#321321'
    ctx.fillRect(x,y,50,50)
  }
  if (event.key == 'a') {
	x-=7
	rew()
	ctx.fillStyle = '#321321'
    ctx.fillRect(x,y,50,50)
  }
  if(event.key=='w'){
	  y-=30
	  rew()
      ctx.fillStyle = '#321321'
	  ctx.fillRect(x,y,50,50)
	  }
});
//функция для обр мыши
var h = canv.getBoundingClientRect();
//mouseup,mousedown

canv.addEventListener('mousemove', function (e) {
  let mx = e.clientX - h.x
  let my = e.clientY - h.y
  document.getElementById("viemmx").innerHTML = "мышь x: "+ mx + " y: "+my
})
canv.addEventListener('mousedown', function (e) {
  //50,50,100,50
  var mx = document.getElementById("viemmx").innerHTML.split(" ")[2]
  var my = document.getElementById("viemmx").innerHTML.split(" ")[4]
  //console.log(mx)
  //console.log(my)
  if((mx > 49 && my>51) && (mx<151 && my<101)){
    alert("hello world")
  }
})
