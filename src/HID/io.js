  var HID_IO = function(){
    this.createControl = (en,ru,Construct)=>{
      document.addEventListener('keydown', function(event) {
        if(event.key == en || event.key == ru){Construct()}
      });
    }
    return this;
}
  //example use code
  // var HI = new HID_IO();
  // HI.createControl('a','ф',()=>{console.log('ds');})
