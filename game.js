//control no use enigne
//  key('a','ф',()=>{s-=10;x.move('gr1',s,s2);x.render()})
//  key('d','в',()=>{s+=10;x.move('gr1',s,s2);x.render()})

window.onload = function(){
  var x = new enigne("canvas");
  x.block('gr1','block',50,50,50,50,'black');
  x.block('player','player',150,100,25,25,'purple');
  x.phys(3,15)
  console.log(x.v.y('player'))
  x.block('gr2','block',150,150,50,50,'black');
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
