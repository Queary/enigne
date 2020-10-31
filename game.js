window.onload = function(){
  var x = new enigne("canvas");
  x.add_block('gr',15,15,15,15,'red')
  x.add_block('gr2',30,30,15,15,'red')
  x.add_block('gr3',45,45,15,15,'red')
  x.render_all(10);
  x.add_block('gr4',55,55,15,15,'red')
  var gfd=0;
  x.move('gr3',gfd,80);
  gfd+=10;
  setInterval(function() {
    x.move('gr',gfd,80);gfd+=1;
  },10)
  x.move('gr',gfd,80);gfd+=10;
  x.move('gr5',gfd,80);gfd+=60;
  x.move('gr2',gfd,80);gfd+=10;
  x.move('gr5',gfd,80);gfd+=10;
  x.move('gr5',gfd,80);
  var y = new enigne("canvas");
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
