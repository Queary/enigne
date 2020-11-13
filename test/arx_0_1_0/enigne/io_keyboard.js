  var HID_IO_keyboard = function(){
    this.createControl_keyboard = (en,ru,Construct)=>{
      document.addEventListener('keydown', function(event) {
        if(event.key == en || event.key == ru){Construct()}
      });
    }
    return this;
}
  //example use code
  // var HI = new HID_IO();
  // HI.createControl('a','ф',()=>{console.log('ds');})
