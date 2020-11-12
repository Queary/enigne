//control no use enigne
//  key('a','ф',()=>{s-=10;x.move('gr1',s,s2);x.render()})
//  key('d','в',()=>{s+=10;x.move('gr1',s,s2);x.render()})

window.onload = function(){
  var x = new enigne("canvas");
  x.phys(0.5,15)
  x.block('player','player',150,100,25,25,'purple');
  x.block('gr1','block',50,50,50,50,'black');
  x.block('but1','button',1050,25,100,25,'black','green','текст',function (){
    alert("ds");
  })
  //x.block('test_no_block','none',200,200,100,100,'black') - фон

  let px = x.v.x('player');
  let py = x.v.y('player');
  //не работает скрипт только на тип player
  //не работает
  // document.addEventListener('keydown', function(event) {
  //   if(event.key == 'a' || event.key == 'ф'){px+=10;x.move('player',50,50)}
  // });
  // не работает
  key('a','ф',(()=>{
    py = x.v.y('player')
    px-=10;x.move("player",px,py);
  }))
  key('в','d',(()=>{
    py = x.v.y('player')
    px+=10;x.move("player",px,py);
  }))
  //перевести в системное
  // mouse_d(()=>{
  //   alert("s")
  // })
  //x.collision(15) - закрытый метод
  console.log(x.v.y('player'))
  //x.move("player",50,50)
  x.block('gr2','block',150,150,50,50,'green');
  x.render();
  x.block('gr3','block',250,250,50,50,'#123321');
  x.render();
  x.move('gr1',5,5);
  // x.clear();
  //x.render();
  var s = x.v.x('gr1');
  var s2= x.v.y('gr1');

  // console.log(x.v.x('gr1'));
  // y.add_block('gr',85,85,15,15,'red');
  // y.render_all(100);
  // x.render(100);
  // x.add_block('gr4',55,55,15,15,'red')
  // x.add_block('gr4',55,55,15,15,'red')
  // x.add_block('gr4',55,55,15,15,'red')
  var test = new VECTOR2(3,5);
  //enigne('canvas').draw.rect(5,5,5,5,'green');
  // console.log(test.x)
}
//rect(5,5,5,5,'green');
