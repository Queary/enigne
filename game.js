window.onload = function(){
  var x = new enigne("canvas");
  x.block('gr1',50,50,50,50,'black');
  x.block('gr2',150,150,50,50,'black');
  x.render();
  x.block('gr3',250,250,50,50,'#123321');
  x.render();
  x.move('gr1',5,5);
  // x.clear();
  x.render();
  var s = x.v.x('gr1');
  var s2= x.v.y('gr1');
  // console.log(x.v.x('gr1'));
  document.addEventListener('keydown', function(event) {
    //консоль выводит всё о нажатой клавиши
    //console.log(event)
    if (event.key == 'd') {
      s+=10
      x.move('gr1',s,s2);
      x.render();
    }
    if (event.key == 'a') {

    }
    if(event.key=='w'){

      }
  });
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
