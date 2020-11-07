var HID_IO_MOUSE = function(){
  this.create_Control_Mouse_d = (Construct)=>{
    document.addEventListener('mousedown',function(event){
      Construct()
    });
  }
  return this;
}

// canv.addEventListener('mousedown', function (e) {
//   //50,50,100,50
//   var mx = document.getElementById("viemmx").innerHTML.split(" ")[2]
//   var my = document.getElementById("viemmx").innerHTML.split(" ")[4]
//   //console.log(mx)
//   //console.log(my)
//   if((mx > 49 && my>51) && (mx<151 && my<101)){
//     alert("hello world")
//   }
// })
